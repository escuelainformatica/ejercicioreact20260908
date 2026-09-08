import type { Route } from "./+types/home";
import Listar from "~/components/usuario/Listar";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Listar Usuarios" },
    { name: "description", content: "Listar Usuarios page for the application" },
  ];
}

export default function Home() {
  return <>
    <Listar />
  </>;
}
