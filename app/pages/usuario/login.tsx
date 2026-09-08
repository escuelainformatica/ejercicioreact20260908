import Login from "~/components/usuario/Login";



export function meta({}: Route.MetaArgs) {
  return [
    { title: "Login" },
    { name: "description", content: "Login page for the application" },
  ];
}

export default function Home() {
  return <>    
    <Login />
  </>;
}
