export default function paintRows(
  colored: boolean,
  setColored: React.Dispatch<React.SetStateAction<boolean>>
) {
  setColored(!colored);
};
