import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  titulo: string;
};

function Cabecera({ children, titulo }: Props) {
  return (
    <nav className="navbar bg-info-subtle p-2">
      <h3> {titulo}</h3>
      {children}
    </nav>
  );
}

export default Cabecera;
