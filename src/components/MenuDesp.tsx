type Props = {
  fun: (val: number) => void;
  cantPag: number;
};

function MenuDesp({ fun, cantPag }: Props) {
  return (
    <div className="dropdown px-3">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Cantida: {cantPag}
      </button>
      <ul className="dropdown-menu">
        <li>
          <a
            className={`dropdown-item ${cantPag == 20 ? "active" : ""}`}
            href="#"
            onClick={() => fun(20)}
          >
            20
          </a>
        </li>
        <li>
          <a
            className={`dropdown-item ${cantPag == 40 ? "active" : ""}`}
            href="#"
            onClick={() => fun(40)}
          >
            40
          </a>
        </li>
        <li>
          <a
            className={`dropdown-item ${cantPag == 60 ? "active" : ""}`}
            href="#"
            onClick={() => fun(60)}
          >
            60
          </a>
        </li>
      </ul>
    </div>
  );
}

export default MenuDesp;
