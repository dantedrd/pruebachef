# pruebachef

Hola, este codigo es por motivo de prueba tecnica para el ingreso a chef

este projecto esta divido en dos carpetas una es el backend con el codigo en php usando el microframework de lumen y el frontend usando
libreria de react


para poder correr el projecto siga estos pasos y tenga encuenta estos requisitos

deve tener instalado nodejs,npm y php

-----------------------------------------------------Backend---------------------------------------------------------------------------

para correr el backend debe dirigirse a la carpeta de backend y ejecutar el siguiente comando 

cd backend

si se encuentra en windows ejecute el comando asi 

rutadondeinstaladosuphp -S localhost:8000 -t public

ejemplo 

c:\xampp\php\php.exe -S localhost:8000 -t public

----------------------------------------------------------------------------------------------------------------------------------------

si esta en linux o mac el comando es asi 

php -S localhost:8000 -t public


si esta usando xamp en linux el comando es asi 

/opt/lamp/bin/php -S localhost:8000 -t public

------------------------------------------------------------------------------------------------------------------------------------------


Este bakend levanta una mini api con la siguiente ruta

http://localhost:8000/api/

los endpoints de esta api son los siguientes


GET /api/superheroes?page=numero de la pagina

esta api te trae todos los superheroes en la base de datos paginados de a 9 elementos 


GET /api/superheroes/:idSuperHereo

esta api te trae un superheroe especifico por su id


GET /api/superheroes/total

esta api te trae el total de superheroes en la base de datos 

---------------------------------------------------BACKEEND--------------------------------------------------------------------------



---------------------------------------------------FRONTEND------------------------------------------------------------------------

para ejecutar el frontend sigue los siguientes pasos 

primero recuerda tener instalado el nodejs 

ejecuta los siguientes comandos

npm run install

npm run start

Con los dos siguiente comandos y ya teniendo en ejecucion el backend ya podria poder visualizar el projecto en el navegador por la 
siguiente ruta

http://localhost:8091/#/

se debe ver algo como esto 

![Captura](https://user-images.githubusercontent.com/27745102/58146187-ab831800-7c1a-11e9-9af8-8610510d68b0.PNG)




---------------------------------------------------FRONTEND------------------------------------------------------------------------------



























