// models/PainterModel.js
import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const esquema = new Schema({
    nombre: { type: String, required: true },
    telefono: String,
    rating: { type: Number, default: 0 },
    email: String
});

const Painter = mongoose.model('Painter', esquema);
export default Painter;
