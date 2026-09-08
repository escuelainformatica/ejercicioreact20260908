# Ejercicio 8 Septiembre

* Complete el ejercicio con la pantalla de Login

* Y luego, cree las pantallas de insertar,listar,actualizar y borrar

Para este ejemplo vamos a usar la siguiente API:

https://eftec.cl/api/usuarios

La API permite realizar operaciones CRUD sobre los usuarios, es decir:

* **Crear** un nuevo usuario: `POST /api/usuarios`
* **Leer** la lista de usuarios: `GET /api/usuarios`
* **Actualizar** un usuario existente: `PUT /api/usuarios/{id}`
* **Borrar** un usuario: `DELETE /api/usuarios/{id}`

Recuerde que para realizar las operaciones de **Actualizar** y **Borrar** necesita el `id` del usuario, que puede obtener de la lista de usuarios.

Además, asegúrese de manejar correctamente los errores que puedan surgir al interactuar con la API, como usuarios no encontrados o problemas de conexión.
