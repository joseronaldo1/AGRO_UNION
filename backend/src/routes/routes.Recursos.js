import { Router } from "express";
import {registrar,  actualizar,  buscar, listar } from '../controllers/controllerRecursos.js';
import { validacionRecursosR, validacionRecursosA } from "../../validate/validacionRecursos.js";
import { validarToken } from "../controllers/autenticacion.js";



const rutaRecursos = Router();

rutaRecursos.get('/listar',validarToken, listar);
rutaRecursos.post('/registrar',validarToken, validacionRecursosR, registrar);
rutaRecursos.get('/buscar/:id_recursos',validarToken,  buscar); 
rutaRecursos.put('/actualizar/:id_recursos',validarToken, validacionRecursosA, actualizar);


export default rutaRecursos;
