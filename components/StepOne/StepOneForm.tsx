'use client';
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
import { Detail, useDetails } from '@/store/zustand.store';
import useReadAndAddDetails from '@/server/readDataFromExel';

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
  const details = useDetails((state) => state.details);
  const readAndAddDetails = useReadAndAddDetails();

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
    const res: Detail[] = utils.sheet_to_json(ws, { header: 1 });

    console.log(res);
    if (res) readAndAddDetails(res);
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
    </>
  );
}
