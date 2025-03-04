import { useEffect, useState } from "react";
import "./App.css";
import Table from "./components/Table";
import { Props, PropsResponse } from "./types/data";
import {
  deleteElement,
  filterByCountry,
  orderByCountry,
  paintRows,
  restoreInitial,
} from "./helpers";

export default function App() {
  const [data, setData] = useState<Props[]>([]);
  const [colored, setColored] = useState(false);
  const [filteredData, setFilteredData] = useState<Props[]>([]);

  useEffect(() => {
    const page = 1;
    const length = 100;
    fetch(`https://randomuser.me/api/?page=${page}&results=${length}`)
      .then((response) => response.json())
      .then((data) => {
        const newData = data.results.map((result: PropsResponse) => ({
          img: result.picture.thumbnail,
          name: result.name.first,
          lastName: result.name.last,
          country: result.location.country,
          actions: (
            <button
              onClick={() => deleteElement(result.login.uuid, setFilteredData)}
            >
              Eliminar
            </button>
          ),
          uuid: result.login.uuid,
        }));
        setData(newData);
        setFilteredData(newData);
      });
  }, []);

  return (
    <div className="mx-auto w-1/3">
      <h1 className="py-16 text-center text-6xl font-bold">
        Lista de usuarios
      </h1>
      <div className="flex justify-center space-x-4 py-4">
        <button
          className="rounded-2xl bg-indigo-950 px-8 py-4"
          onClick={() => paintRows(colored, setColored)}
        >
          Colorear filas
        </button>
        <button
          className="rounded-2xl bg-indigo-950 px-8 py-4"
          onClick={() => orderByCountry(filteredData, setFilteredData)}
        >
          Ordena por pais
        </button>
        <button
          className="rounded-2xl bg-indigo-950 px-8 py-4"
          onClick={() => restoreInitial(setFilteredData, data)}
        >
          Restaurar estado inicial
        </button>
        <input
          className="rounded-2xl bg-indigo-950 px-8 py-4"
          onChange={(e) => filterByCountry(e, data, setFilteredData)}
          placeholder="Filtrar por país"
        />
      </div>
      <Table data={filteredData} colored={colored} />
    </div>
  );
}
