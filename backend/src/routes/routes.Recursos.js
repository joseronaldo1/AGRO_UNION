import { Router } from "express";
import {registrar,  actualizar,  buscar, listar } from '../controller/controllerRecursos.js';
import {check} from 'express-validator';


const rutaRecursos = Router();

rutaRecursos.get('/listar', listar);
rutaRecursos.post('/registrar',check('precio').notEmpty().withMessage('El precio es obligatorio').isNumeric().withMessage('El precio debe ser un número'), registrar);
rutaRecursos.get('/buscar/:id_recursos', buscar); 
rutaRecursos.put('/actualizar/:id_recursos',check('precio').notEmpty().withMessage('El precio es obligatorio').isNumeric().withMessage('El precio debe ser un número'), actualizar);


export default rutaRecursos;