import { Props } from "../types/data";

export default function filterByCountry(
  e: React.ChangeEvent<HTMLInputElement>,
  data: Props[],
  setFilteredData: React.Dispatch<React.SetStateAction<Props[]>>
) {
  const filter = e.target.value;
  setFilteredData(data);
  setFilteredData((prevData) =>
    prevData.filter((element) =>
      element.country.toLowerCase().match(filter.toLowerCase())
    )
  );
}
