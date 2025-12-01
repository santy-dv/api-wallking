import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import routerAPI from './routes/index.js';

dotenv.config();
const PORT = process.env.PORT;
const URI_DB = process.env.URI_DB;

mongoose.connect(URI_DB);
const db = mongoose.connection;

db.on('error', () => console.error('Error de conexión'));
db.once('open', () => console.log('Conexión con la DB Correcta 👌'));

const app = express();
app.use(express.json());

// Servir carpeta pública
app.use('/', express.static('public'));

// Middleware
app.use((request, response, next) => {
    console.log('Hola soy el middleware 👋');
    next();
});

// Ruta inicial
app.get('/', (request, response) => {
    response.send('<h1>Wallking</h1>');
});

// Rutas API
routerAPI(app);

app.listen(PORT, () => {
    console.log(`La pared se levantó en el puerto ${PORT}`);
});
