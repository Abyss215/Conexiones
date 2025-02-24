type Props = {
  data: {
    id: number;
    name: string;
    img: string;
  };
};

function Ficha({ data }: Props) {
  //console.log(data);
  let imagen;
  try {
    imagen =
      data.img !== null ? (
        <img src={data.img} className="card-img-top" alt="..." />
      ) : (
        ""
      );
  } catch (err) {
    console.log(err);
  }

  return (
    <div className="col" key={data.id}>
      <div className="card h-100">
        <div className="card-body">
          {imagen}
          <h5 className="card-title">{data.name}</h5>
          <p className="card-text"></p>
        </div>
      </div>
    </div>
  );
}

export default Ficha;
