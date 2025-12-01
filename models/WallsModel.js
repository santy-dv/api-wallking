// models/WallsModel.js
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const esquema = new Schema({
    nombre: { type: String, required: true },
    descripcion: String,
    color: String,
    estilo: String,
    imagen: String,
    painter: { type: Schema.Types.ObjectId, ref: 'Painter' },
    createdAt: { type: Date, default: Date.now }
});

const Wall = mongoose.model('Wall', esquema);
export default Wall;
