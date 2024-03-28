'use client';
import React, { useEffect, useState } from 'react';
import { read, utils } from 'xlsx';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '../ui/button';

const formSchema = z.object({
  fileDetails: z.any().refine(
    (file) => {
      return file;
    },
    {
      message: 'Файл не вибраний',
    },
  ),
});

export default function StepOneForm() {
  const [excelData, setExcelData] = useState<any>([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fileDetails: null,
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {};

  const onSubmitFile = async (e: any) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;

    const data = await selectedFile.arrayBuffer();
    const wb = read(data);
    const ws = wb.Sheets[wb.SheetNames[0]];
    const res = utils.sheet_to_json(ws, { header: 1 });
    setExcelData(res);
    console.log(res);
    console.log(excelData);
  };

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="fileDetails"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Виберіть файл з деталями.</FormLabel>
                <FormControl>
                  <Input
                    accept=".xlsx,.csv,.xls"
                    type="file"
                    multiple={false}
                    {...field}
                    onChange={onSubmitFile}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
      <div>
        {excelData[0] ? (
          <div>
            <h1></h1>
            <table className="table">
              <thead>
                <tr>
                  {excelData[0].map(
                    (
                      x: any,
                      index: number, // Додано параметр index
                    ) => (
                      <th key={index}>{x}</th> // Повернуто JSX елемент
                    ),
                  )}
                </tr>
              </thead>
            </table>
          </div>
        ) : (
          <h1>Немає даних</h1>
        )}
      </div>
    </>
  );
}
