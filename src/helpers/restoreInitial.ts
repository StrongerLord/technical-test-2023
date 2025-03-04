import { Props } from "../types/data";

export default function restoreInitial(
  setFilteredData: React.Dispatch<React.SetStateAction<Props[]>>,
  data: Props[]
) {
  setFilteredData(data);
}
