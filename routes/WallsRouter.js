import express from "express";
const router = express.Router();
import {
    crearWall,
    listarWalls,
    getWallById,
    deleteWallById,
    updateWallById
} from "../controllers/WallsController.js";

router.get('/', listarWalls);
router.get('/:id', getWallById);
router.delete('/:id', deleteWallById);
router.put('/:id', updateWallById);
router.post('/', crearWall);

export default router;
