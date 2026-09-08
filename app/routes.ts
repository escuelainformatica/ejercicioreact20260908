import { type RouteConfig, index,route } from "@react-router/dev/routes";

export default [
    index("pages/usuario/login.tsx"),
    route("usuario/","pages/usuario/listar.tsx"),
    route("usuario/insertar","pages/usuario/insertar.tsx"),
    route("usuario/eliminar","pages/usuario/eliminar.tsx"),
    route("usuario/actualizar","pages/usuario/actualizar.tsx")
] satisfies RouteConfig;
