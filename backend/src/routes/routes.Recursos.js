import { Router } from "express";
<<<<<<< HEAD:src/routes/routes.Recursos.js
import {registrar,  actualizar,  buscar, listar } from '../controller/controllerRecursos.js';
import { validacionRecursosR } from "../../validate/validacionRecursos.js";
import { validacionRecursosA } from "../../validate/validacionRecursos.js";
=======
import {registrar,  actualizar,  buscar, listar } from '../controllers/controllerRecursos.js';
import {check} from 'express-validator';
>>>>>>> e366ffcc4c20baf1711bee3b9fe84c0990dfcad5:backend/src/routes/routes.Recursos.js


const rutaRecursos = Router();

rutaRecursos.get('/listar', listar);
rutaRecursos.post('/registrar',validacionRecursosR, registrar);
rutaRecursos.get('/buscar/:id_recursos',  buscar); 
rutaRecursos.put('/actualizar/:id_recursos',validacionRecursosA, actualizar);


export default rutaRecursos;