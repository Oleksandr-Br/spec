import { Detail, useDetails } from '@/store/zustand.store';

const useReadAndAddDetails = () => {
  const addItems = useDetails((state) => state.addItems);

  const readAndAddDetails = (items: Detail[]) => {
    addItems(items);
    console.log(items);
  };

  return readAndAddDetails;
};

export default useReadAndAddDetails;
