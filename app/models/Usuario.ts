/*
 {
    "id": 1,
    "nombre": "Ana García",
    "email": "ana@mail.com",
    "clave": "1234",
    "token": "a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2"
  }
*/
export default interface Usuario {
  id: number;
  nombre: string;
  email: string;
  clave: string;
  token: string;
}
