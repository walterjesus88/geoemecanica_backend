# API REST para la oficina de Geomecánica de Chicrin

El servidor para la oficina de Geomecánica de la empresa minera Chicrin se encargará
de responder las solicitudes de las aplicaciones cliente, utilizando para ellos la
tecnología API REST.

Esta versión esta contruida en [Node.js]() y [Express]().

## Ejecutando en un servidor local

1. Asegúrese de tener instalado Nodejs, si no lo tiene puede descargarlo de [aquí](http://nodejs.org/).

2. Clone el repositorio.

3. En la terminal, ingrese (cd) al directorio geomecanica-backend.

4. Instale las dependencias del servidor:

  ```
  npm install
  ```

5. Configure el archivo config.json con los datos de su servidor local.

6. Ejecute el servidor:

  ```
  npm start
  ```

7. Abra el navegador e ingrese a: [https://localhost:3000](https://localhost:3000)