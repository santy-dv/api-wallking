import express from "express";
const router = express.Router();
import {
    crearUsuario, 
    listarUsuarios, 
    getUserById,
    deleteUserById,
    updateUserById 
} from "../controllers/UsuarioController.js";

router.get('/', listarUsuarios);
router.get('/:id', getUserById);
router.delete('/:id', deleteUserById);
router.put('/:id', updateUserById);
router.post('/', crearUsuario);

export default router;
