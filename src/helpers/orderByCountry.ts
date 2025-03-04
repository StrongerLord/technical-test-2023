import { Props as Props } from "../types/data";
export default function orderByCountry(filteredData: Props[], setFilteredData: React.Dispatch<React.SetStateAction<Props[]>>) {
    const newData = [...filteredData];
    newData.sort((a, b) => a.country.localeCompare(b.country));
    setFilteredData(newData);
  };
  