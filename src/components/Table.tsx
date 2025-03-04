interface Props {
  img: string;
  name: string;
  lastName: string;
  country: string;
  actions: React.ReactNode;
}

export default function Table({
  data,
  colored,
}: {
  data: Props[];
  colored: boolean;
}) {
  return (
    <>
      <div
        className={`m-4 grid grid-cols-5 justify-items-center gap-4 rounded-full bg-zinc-800`}
      >
        <div>Foto</div>
        <div>Nombre</div>
        <div>Apellido</div>
        <div>País</div>
        <div>Acciones</div>
      </div>

      {data.map((element, index) => (
        <div
          key={index}
          className={`m-4 grid grid-cols-5 justify-items-center gap-4 ${colored ? (index % 2 == 0 ? "bg-zinc-700" : "bg-zinc-600") : "bg-zinc-600"} rounded-full`}
        >
          <div>
            <img src={element.img} alt="Foto" />
          </div>
          <div>{element.name}</div>
          <div>{element.lastName}</div>
          <div>{element.country}</div>
          <div>{element.actions}</div>
        </div>
      ))}
    </>
  );
}
