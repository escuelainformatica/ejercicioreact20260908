import type { Route } from "./+types/home";
import Insertar from "~/components/usuario/Insertar";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Insertar Usuario" },
    { name: "description", content: "Insertar Usuario page for the application" },
  ];
}

export default function Home() {
  return <>
    <Insertar />
  </>;
}
