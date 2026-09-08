import type Usuario from "~/models/Usuario";
import configuracion from "~/config/config";

const UsuarioAPI = {
    listar: function ():Promise<Usuario[]> {
        return fetch(`${configuracion.apiUrl}/usuarios`)
            .then(response => response.json())
    },
    insertar:function (usuario: Usuario):Promise<Usuario> {
        return fetch(`${configuracion.apiUrl}/usuarios`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(usuario)
        })
        .then(response => response.json());
    },
    actualizar:function (usuario: Usuario):Promise<Usuario> {
        return fetch(`${configuracion.apiUrl}/usuarios/${usuario.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(usuario)
        })
        .then(response => response.json());
    },
    eliminar:function (id: number):Promise<void> {
        return fetch(`${configuracion.apiUrl}/usuarios/${id}`, {
            method: 'DELETE'
        })
        .then(response => response.json());
    },
    obtenerPorId:function (id: number):Promise<Usuario> {
        return fetch(`${configuracion.apiUrl}/usuarios/${id}`)
            .then(response => response.json());
    },
    login:function (usuario: Usuario):Promise<Usuario> {
        return fetch(`${configuracion.apiUrl}/usuarios/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(usuario)
        })
        .then(response => response.json());
    }
};

export default UsuarioAPI;