# API REST para la oficina de Geomecánica de Chicrin

El servidor para la oficina de Geomecánica de la empresa minera Chicrin se encargará
de responder las solicitudes de las aplicaciones cliente, utilizando para ellos la
tecnología API REST.

Esta versión esta contruida en [Node.js]() y [Express]().

## Ejecutando en un servidor local

1. Asegúrese de tener instalado el gestor de base de datos postgresql (ha sido probado
  con la versión 9.4.5), también debera tener cargada la base de datos que utilizará
  el sistema.

2. Asegúrese de tener instalado Nodejs, si no lo tiene puede descargarlo de [aquí](http://nodejs.org/).

3. Clone el repositorio y ubiquelo en el directorio que crea conveniente.

4. En la terminal, ubiquese hasta dentro del directorio geomecanica-backend.

5. Instale las dependencias que utiliza la aplicación ejecutando la siguiente línea en la
terminal:

  ```
  npm install
  ```

6. Configure el archivo config.json con los datos de su servidor local, como las cuentas
de la base de datos y del correo electrónico.

7. Si a seguido los pasos, ya tiene correctamente instalada la aplicación, para ejecutarla
debera ingresar la siguiente línea en la terminal:

  ```
  npm start
  ```

8. Abra el navegador e ingrese a: [http://localhost:3000](https://localhost:3000) o la ruta
que haya configurado, podra visualizar un mensaje de bienvenida.
# geoemecanica_backend
