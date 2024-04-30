'use client';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useDetails } from '@/store/zustand.store';
import XLSX from 'xlsx';

export default function TableResult() {
  const details = useDetails((state) => state.details);

  const OnDown = () => {
    const worksheet = XLSX.utils.json_to_sheet(details);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Dates');
    XLSX.writeFile(workbook, 'Presidents.xlsx', { compression: true });
  };

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
                  {details.map((item, key) => (
                    <TableRow key={key}>
                      <TableCell>{item[0]}</TableCell>
                      <TableCell>{item[1]}</TableCell>
                      <TableCell>{item[2]}</TableCell>
                      <TableCell>{item[3]}</TableCell>
                      <TableCell>{item[4]}</TableCell>
                      <TableCell>{item[5]}</TableCell>
                      <TableCell>{item[11]}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">2</TableCell>
            <TableCell>Поклейка кромки</TableCell>
            <TableCell className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[20px]">№</TableHead>
                    <TableHead className="text-center text-black">Деталь</TableHead>
                    <TableHead className="text-center text-black">
                      Кромка по довжині з верху
                    </TableHead>
                    <TableHead className="text-center text-black">
                      Кромка по довжині з низу
                    </TableHead>
                    <TableHead className="text-center text-black">
                      Кромка по ширині з ліва
                    </TableHead>
                    <TableHead className="text-center text-black">
                      Кромка по ширині з права
                    </TableHead>
                    <TableHead className="text-center text-black">( * ) Поворот</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {details.map((item, key) => (
                    <TableRow key={key}>
                      <TableCell>{item[0]}</TableCell>
                      <TableCell>{item[1]}</TableCell>
                      <TableCell>{item[6]}</TableCell>
                      <TableCell>{item[7]}</TableCell>
                      <TableCell>{item[8]}</TableCell>
                      <TableCell>{item[9]}</TableCell>
                      <TableCell>{item[10]}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">3</TableCell>
            <TableCell>Фурнітура виробу</TableCell>
            <TableCell className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[20px]">№</TableHead>
                    <TableHead className="text-center text-black">Назва</TableHead>
                    <TableHead className="text-center text-black">К-ть</TableHead>
                    <TableHead className="text-center text-black">Од.Виміру</TableHead>
                    <TableHead className="text-center text-black">Колір</TableHead>
                    <TableHead className="text-center text-black">Літера</TableHead>
                    <TableHead className="text-center text-black">Примітка</TableHead>
                    <TableHead className="text-center text-black">Пакування</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {details.map((item, key) => (
                    <TableRow key={key}>
                      <TableCell>{item[0]}</TableCell>
                      <TableCell>{item[1]}</TableCell>
                      <TableCell>{item[6]}</TableCell>
                      <TableCell>{item[7]}</TableCell>
                      <TableCell>{item[8]}</TableCell>
                      <TableCell>{item[9]}</TableCell>
                      <TableCell>{item[10]}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">4</TableCell>
            <TableCell>Загальна к-ть місць</TableCell>
            <TableCell className="p-0 text-center">10 Коробка</TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <button className="border" onClick={OnDown}>
        Down
      </button>
    </>
  );
}
