import { Router } from "express";
import {registrar,  actualizar,  buscar, listar } from '../controller/controllerRecursos.js';
import { validacionRecursosR } from "../../validate/validacionRecursos.js";
import { validacionRecursosA } from "../../validate/validacionRecursos.js";


const rutaRecursos = Router();

rutaRecursos.get('/listar', listar);
rutaRecursos.post('/registrar',validacionRecursosR, registrar);
rutaRecursos.get('/buscar/:id_recursos',  buscar); 
rutaRecursos.put('/actualizar/:id_recursos',validacionRecursosA, actualizar);


export default rutaRecursos;