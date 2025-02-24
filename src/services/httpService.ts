import axios from "axios";
const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
});
export async function getPagina(inicio: number, cantidad: number) {
  const url = `/pokemon/?limit=${cantidad}&offset=${inicio}`;

  return (await api.get(url)).data;
}

export function getLista(datos: { name: string; url: string }[]) {
  return datos.map((el) => {
    let dat = {
      id: 0,
      name: "",
      img: "",
    };
    getURLPokemon(el.url).then((res) => {
      dat.id = res.id;
      dat.name = res.name;
      dat.img = res.img;
      //console.log(dat);
    });
    return dat;
  });
}

export async function getURLPokemon(url: string) {
  const res = await (await axios.get(url)).data;
  const poke = {
    id: res.id,
    name: res.name,
    img: res.sprites.other.home.front_default,
  };
  //console.log(poke);
  return poke;
}
