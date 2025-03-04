import { Props as Props } from "../types/data";

export default function deleteElement(
  uuid: string,
  setFilteredData: React.Dispatch<React.SetStateAction<Props[]>>
) {
  setFilteredData((prevData) =>
    prevData.filter((element) => element.uuid !== uuid)
  );
}
