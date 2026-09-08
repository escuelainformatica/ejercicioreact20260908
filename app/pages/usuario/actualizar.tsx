import type { Route } from "./+types/home";
import Actualizar from "~/components/usuario/Actualizar";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "Actualizar Usuario" },
    { name: "description", content: "Actualizar Usuario page for the application" },
  ];
}

export default function Home() {
  return <>
    <Actualizar />
  </>;
}
