type Props = {
  pagina: number;
  regresar: () => void;
  avanzar: () => void;
  limite: number;
};

function Paginacion({ pagina, regresar, avanzar, limite }: Props) {
  return (
    <nav>
      <ul className="pagination justify-content-center p-2">
        <li className={`page-item ${pagina <= 1 ? "disabled" : ""}`}>
          <a
            className="page-link"
            href="#"
            aria-label="Previous"
            onClick={() => {
              regresar();
            }}
          >
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li className="page-item active">
          <a className="page-link" href="#">
            Pagina {pagina}
          </a>
        </li>
        <li className={`page-item ${pagina >= limite ? "disabled" : ""}`}>
          <a
            className="page-link"
            href="#"
            aria-label="Next"
            onClick={() => {
              avanzar();
            }}
          >
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Paginacion;
