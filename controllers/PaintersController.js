// controllers/PaintersController.js
import Painter from '../models/PaintersModel.js';

const crearPainter = async (req, res) => {
    try {
        const body = req.body;
        const nuevo = new Painter(body);
        const saved = await nuevo.save();
        res.status(201).json({ msg: 'Painter creado', data: saved });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const listarPainters = async (req, res) => {
    try {
        // filtros: nombre (busqueda), minRating
        const { nombre, minRating } = req.query;
        const filtro = {};
        if (nombre) filtro.nombre = { $regex: nombre, $options: 'i' };
        if (minRating) filtro.rating = { $gte: Number(minRating) };

        const painters = await Painter.find(filtro);
        res.json({ data: painters });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getPainterById = async (req, res) => {
    try {
        const p = await Painter.findById(req.params.id);
        if (!p) return res.status(404).json({ msg: 'No encontrado' });
        res.json({ data: p });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const updatePainter = async (req, res) => {
    try {
        const updated = await Painter.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json({ msg: 'Painter actualizado', data: updated });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const deleteUserById = async (req, res) => {
    try {
        await Painter.findByIdAndDelete(req.params.id);
        res.json({ msg: 'Painter eliminado' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export { crearPainter, listarPainters, getPainterById, updatePainter, deleteUserById };
