// GET	/servicios	Autenticado	Listar servicios
// POST	/servicios	Solo admin	Crear servicio
// PUT	/servicios/:id	Solo admin	Editar servicio
// DELETE	/servicios/:id	Solo admin	Eliminar servicio

import { Router } from "express";
import {
    obtenerServicios,
    crearServicio,
    editarServicio,
    eliminarServicio
} from "../controllers/servicios.controller.js"
import {
    validarCamposServicio
} from "../middlewares/validaciones.middleware.js"
import {soloAdmin} from "../middlewares/auth.middleware.js"

const router = Router()

//rutas para /servicios

//acceso: cualquier usuario autenticado
router.get('/', obtenerServicios)
//acceso: admin
router.post('/', soloAdmin, validarCamposServicio, crearServicio)
//acceso: admin
router.put('/:id', soloAdmin, editarServicio)
//acceso: admin
router.delete('/:id', soloAdmin, eliminarServicio)

export default router