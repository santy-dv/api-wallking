# api-wallking
 API de solidos cuerpos construidos de forma vertical, muros.

``` bash
    npm init
```

Dependencias a instalar:
``` bash
    npm install express dotenv mongoose
```
|--models/
|--controllers/
|--routes/
|-- index.js
|-- package.json
|-- .env
|-- .gitignore

# Datos del proyecto

Nombre y apellido: Santiago Montero
Nombre de la materia: Aplicaciones Híbridas
Nombre del docente: Jonathan Cruz
Comisión: DWT4AP


# Datos de cada ruta:
Cada ruta contiene su atributo ID generado automáticamente al crear un nuevo objeto. Cada ruta tiene su función de filtrado por ID.


Usuarios (user):

``` bash
nombre: String
email: String
clave: String
tel: String
```

Painters (pintor):

``` bash
nombre: String
telefono: String
rating: Número
email: String
Método de filtrado: rating y nombre
```

Walls (pared):

``` bash
nombre: String
descripcion: String
color: String
estilo: String
imagen: String
painter: ID del pintor (tiene que existir en primer lugar)
createdAt: Fecha
Método de filtrado: color, estilo y autor
```
