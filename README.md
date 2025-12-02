# API-REST-con-Node.js-y-Express

Este proyecto es una API desarrollada con Node.js y Express, la API responde en formato JSON y sirve como práctica básica de creación de rutas, manejo de métodos HTTP y uso de middleware.

Materiales necesarios para ejecutar el programa:
  -Node.js
  -npm 
  -Visual studio Code
  -THUNDER CLIENT para este caso
  
Dependencias utilizadas:
  -express

Ejecución del proyecto:
1. Clonar el repositorio -> git clone https://github.com/Sofifdz/API-REST-con-Node.js-y-Express.git
2. Abrir  terminal dentro de la carpeta del proyecto en visual studio code
3. Ejecutar:
    -npm install
    -node index.js
4. Una vez ejecutados los comandos, se mostrará en consola: SERVIDOR CORRIENDO EXITOSAMENTE EN: http://localhost:3000
5. Abriremos thunder client para poder utilizar los endpoints:
   -GET /saludo: Devuelve un mensaje de saludo con un texto, autor y la fecha del sistema
   -GET /user: Devuelve la lista completa de usuarios almacenados en memoria
   -POST /user: Agrega un nuevo usuario
   -PUT /user/:id : Actualiza los datos de un usuario identificado por su id
   -DELETE /user/:id :Elimina un usuario según el id proporcionado



