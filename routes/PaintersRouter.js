// routes/PaintersRouter.js
import express from 'express';
const router = express.Router();

import {
    crearPainter,
    listarPainters,
    getPainterById,
    updatePainter,
    deleteUserById
} from '../controllers/PaintersController.js';

router.get('/', listarPainters);
router.get('/:id', getPainterById);
router.delete('/:id', deleteUserById);
router.put('/:id', updatePainter);
router.post('/', crearPainter);

export default router;
