# Alkemy Challenge (Express + React)

## Consigna:

Desarrollar una aplicación para administración de presupuesto personal. La misma debe
permitir crear y editar ingresos y egresos de dinero, y mostrar un balance resultante de las
operaciones registradas.

De forma adicional se implementó _Autentificación de Usuarios_ y _Categoría de Operaciones_.

### Requerimientos:

- [Node.js](https://nodejs.org/es/)
- [MariaDB](https://mariadb.org/) o [MySQL](https://www.mysql.com/)

#### Instalación:

1. Clonar el repositorio.

```
git clone https://github.com/FedericoDG/Alkemy_Node_React.git
```

2. Instalar los paquenes necesarios de Node.js.

```
cd Alkemy_Node_React
npm install
```

3. Instalar los paquetes necesarios de React.

```
cd public
npm install
```

4. Crear una base de datos (nombre a elección).
5. Importar el archivo **alkemy.sql** que se encuentra en la carpeta SQL. Puedes utiliar algún gestor de base de datos como _phpMyAdmin_, _HeidiSQL_ o similar.
6. Editar el archivo **.env** con los datos de conexión de tu base de datos.

```
# EDITAR DATOS DE CONEXION A MYSQL/MARIADB
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=alkemy
```

#### Iniciar el backend:

```
node app.js
```

_La API correrá en el puerto 3000_.

#### Iniciar el front:

```
cd public
npm run start
```

_React correrá en el puerto 3001_.
Abrir http://localhost:3001/

```
CREDENCIALES PARA PROBAR LA APLICACIÓN
user1@mail.com - Password1234!
user2@mail.com - Password1234!
```

##### Paquetes utilizados

NODE

- [Express](https://www.npmjs.com/package/express)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- [Cors](https://www.npmjs.com/package/cors)
- [Mysql](https://www.npmjs.com/package/mysql)
- [Axios](https://www.npmjs.com/package/axios)
- [JsonWebToken](https://www.npmjs.com/package/jsonwebtoken)
- [Bcrypt](https://www.npmjs.com/package/bcrypt)

REACT

- [React Router Dom](https://www.npmjs.com/package/react-router-dom)
- [Axios](https://www.npmjs.com/package/axios)
- [Sass](https://www.npmjs.com/package/sass)
- [React Icons](https://www.npmjs.com/package/react-icons)
- [Framer Motion](https://www.npmjs.com/package/framer-motion)

[Documentación de Node.js](https://nodejs.org/es/docs/)
[Documentación de React](https://es.reactjs.org/docs/getting-started.html)
