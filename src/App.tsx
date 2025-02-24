import { useEffect, useState } from "react";
import { getLista, getPagina } from "./services/httpService";
import Paginacion from "./components/Paginacion";
import Contenido from "./components/Contenido";
import MenuDesp from "./components/MenuDesp";
import Cabecera from "./components/Cabecera";
import Ficha from "./components/Ficha";

function App() {
  const [datos, setDatos] = useState<
    {
      id: number;
      name: string;
      img: string;
    }[]
  >([]);
  const [pagina, setPagina] = useState(1);
  const [limite, setLimite] = useState(1);
  const [numPaginacion, setNumPaginacion] = useState(20);
  const [cargando, setCargando] = useState(true);

  ///recuperacion de datos
  const getDatos = async () => {
    setCargando(true);
    const res = await getPagina((pagina - 1) * numPaginacion, numPaginacion);
    const data = await getLista(res.results);
    //console.log(data);

    setTimeout(() => {
      setDatos(data);
    }, 500);
    setLimite(
      (res.count - (res.count % numPaginacion)) / numPaginacion +
        (res.count % numPaginacion ? 1 : 0)
    );
  };

  //cambio de datos
  useEffect(() => {
    getDatos();
    //console.log(datos);
  }, [pagina, numPaginacion]);

  //estado de actualizacion
  useEffect(() => {
    setCargando(false);
  }, [datos]);

  const nextPagina = () => {
    setPagina(pagina + 1);
  };
  const prevPagina = () => {
    setPagina(pagina - 1);
  };

  return (
    <>
      <Cabecera titulo="Pokedex">
        <MenuDesp cantPag={numPaginacion} fun={setNumPaginacion} />
      </Cabecera>
      <div className={`container bg-body `}>
        <div className={`${cargando ? "opacity-25" : ""}`}>
          <Contenido colMin={3}>
            {datos.map((el) => {
              return el == null ? "" : <Ficha key={el.id} data={el}></Ficha>;
            })}
          </Contenido>
        </div>
        {cargando ? (
          <div className={`position-absolute top-50 start-50`}>
            <button className="btn btn-primary" type="button" disabled>
              <span
                className="spinner-grow spinner-grow-sm"
                aria-hidden="true"
              ></span>
              <span role="status">Cargando...</span>
            </button>
          </div>
        ) : (
          ""
        )}
        <Paginacion
          pagina={pagina}
          regresar={prevPagina}
          avanzar={nextPagina}
          limite={limite}
        />
      </div>
    </>
  );
}

export default App;
