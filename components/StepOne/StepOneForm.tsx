'use client';
import React, { useState } from 'react';
import { read, utils } from 'xlsx';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { object, z } from 'zod';
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
  const [excelData, setExcelData] = useState<any[]>([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fileDetails: null,
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {};

  const onSubmitFile = (e: any) => {
    let selectedFile = e.target.files[0];
    if (selectedFile) {
      let reader = new FileReader();
      reader.readAsArrayBuffer(selectedFile);
      reader.onload = (e) => {
        const result = e.target?.result;
        const wb = read(result);
        const ws = wb.Sheets[wb.SheetNames[0]];
        const data = utils.sheet_to_json(ws);
        setExcelData(data);
      };
    }
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
                  <Input accept=".xlsx,.csv,.xls" type="file" {...field} onChange={onSubmitFile} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
      <div>
        {excelData.length > 0 ? (
          <div>
            <h1></h1>
            <table className="table">
              <thead>
                <tr>
                  {Object.keys(excelData[0]).map((key) => (
                    <th key={key}>{key}</th>
                  ))}
                </tr>
              </thead>
            </table>
          </div>
        ) : (
          <h1>Нема данни</h1>
        )}
      </div>
    </>
  );
}
