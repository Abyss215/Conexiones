import { ReactNode, useState } from "react";

type Props = {
  children: ReactNode;
  colMin?: number;
  colMax?: number;
};

function Contenido({ children, colMin = 1, colMax = 6 }: Props) {
  return (
    <div className="container-fluid p-4">
      <div className={`row row-cols-${colMin} row-cols-md-${colMax} g-4`}>
        {children}
      </div>
    </div>
  );
}

export default Contenido;
