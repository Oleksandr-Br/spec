import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export default function TableResult() {
  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-center text-black">Тумба верхня</TableHead>
          </TableRow>
          <TableRow>
            <TableHead className="text-center text-black">
              Колір виробу для запуску на контрольну зборку: Колір1 - Назва, Колір2 - Назва
            </TableHead>
          </TableRow>
        </TableHeader>
      </Table>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[20px]">№ п\п</TableHead>
            <TableHead className="w-[200px] text-center">Назва</TableHead>
            <TableHead className="text-center">Первинні данні</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium text-center">1</TableCell>
            <TableCell className="font-medium text-center">Розміри та кількість деталей</TableCell>
            <TableCell className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[20px]">№</TableHead>
                    <TableHead className="text-center text-black">Деталь</TableHead>
                    <TableHead className="text-center text-black">Довжина</TableHead>
                    <TableHead className="text-center text-black">Ширина</TableHead>
                    <TableHead className="text-center text-black">Кількість</TableHead>
                    <TableHead className="text-center text-black">Матеріал</TableHead>
                    <TableHead className="text-center text-black">№ коробки</TableHead>
                    <TableHead className="text-center text-black">Примітка</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>1</TableCell>
                    <TableCell>Криша</TableCell>
                    <TableCell>500</TableCell>
                    <TableCell>100</TableCell>
                    <TableCell>1</TableCell>
                    <TableCell>Колір</TableCell>
                    <TableCell>1</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>1</TableCell>
                    <TableCell>Криша</TableCell>
                    <TableCell>500</TableCell>
                    <TableCell>100</TableCell>
                    <TableCell>1</TableCell>
                    <TableCell>Колір</TableCell>
                    <TableCell>1</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>1</TableCell>
                    <TableCell>Криша</TableCell>
                    <TableCell>500</TableCell>
                    <TableCell>100</TableCell>
                    <TableCell>1</TableCell>
                    <TableCell>Колір</TableCell>
                    <TableCell>1</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">INV001</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </>
  );
}
