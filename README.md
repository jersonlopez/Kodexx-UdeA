# Kodexx-UdeA
semillero de programacion


pasos para hacer commit:
1. git status
2. git add -A
3. git status
4. git commit -m "aqui se pone un comentario"
5. git push -u origin master 


------Clase 5 KodexxUdeA------ previamente haber instalado git. git clone - clonar proyecto. git add -A. - agregar todas las cosas nuevas en la carpeta. git add. - agrega todo pero en la carpeta donde me encuentro. (recomendado por el apá) git commit - una especie de comentario o bandera. git commit -m "Agregamos x cosa y se actualizó". git push - subir todo a la nube. git pull - coge todos los archivos nuevos en la nube del repo, los descarga y actualiza. git status - ver el status git push -u origin master - subir a la nube con usuario(-u) branch

form input button

inline-block flex


		- marzo 24 de 2017

-callback
-setInterval
-setTimeout

		- marzo 31 de 2017 

- leer sobre http://webassembly.org/

parados en la carpeta escribimos el comando: "npm init" y este nos creara un paquete json, despues el comando "npm i -S express" para crear deṕendencias y permitir conexiones(abstraccion de node js), "npm i -S morgan" para logs <--crea un carpeta al lado del archivo-->.
con el comando "npm i -D nodemon" --> para que no toque bajar el servidor cada vez que modifique algo, se modifica el combre del script en el package.json y para correrlo colocamos "npm run nombredelscript".

// el "-S" es para que los descargue dentro del archivo json  
// el "-D" lo ejecuta localmente en la aplicacion
// el "-G" lo instala globalmente en la maquina

con el node no hay que importar el .js al HTML

para toda la documentacion contenida en npm: https://www.npmjs.com/

en la web podemos usar: (CRUD)
	- get --> pedir-obtener --> Read 
	- post --> mandar-enviar --> Create
	- put --> actualizar --> Update                  
	- delete --> borrar --> Delete


// para cambiar el nombre de quien hace el commit:
	-\n(git config user.name "jersonlopez") 
	-\n(git config user.email "jersonlopez.1204@gmail.com")



		- abril 7 de 2017 (semilla-nodejs)


		- require() --> importa.
		
para protocolos https --> https://letsencrypt.org/
 se recomiendo usar VPN (consultar implementación)

_________________________________________________________________________________________________________________________


		- abril 21 de 2017(Persistencia)

--> Persistencia: mantener algo en el tiempo, almacenar datos para volverlos a utilizar en algun momento.
	- bases relacionales --> que tiene una seria de reglas.
	- bases no relacionales --> no tiene dichas reglas (mongoDB, firebase).
	- primary key()
	- foreign key()

PostgreSQL es una BD que es gratis para proyectos.

para crear DB:

		en modo mysql> todas la lineas tienen que terminar en (;)
	-mysql -u root -p --> password:root --> iniciar mysql.
	-create database; --> crear la nuestra.
	-show databases; --> mirar las BDs que hay en el pc.
	-use empresa;
	-create table cliente(
		cedula int,
		nombre varchar(40),
		telefono varchar(15),
		direccion varchar(30),
		email varchar(40)
		primary key(cedula)
		);
	-describe "nombre_de_la_tabla"; --> para mirarla.


#					Kodexx 20172
 
¿Que es Docker?
	/ver diapositivas de marto.
	





	
