import Eliminar from "~/components/usuario/Eliminar";
import type { Route } from "./+types/home";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Eliminar Usuario" },
    { name: "description", content: "Eliminar Usuario page for the application" },
  ];
}

export default function Home() {
  return <>
    <Eliminar />
  </>;
}
