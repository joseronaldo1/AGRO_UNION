import { Router } from "express";
import { actualizarAsignacion, registrarAsignacion, listarAsignacion, buscarAsignacion, estadoAsignacion } from "../controllers/controller.asignacion.js";

import { asignacionA } from "../../validate/asignacion.js"
import { asignacionC } from "../../validate/asignacion.js"

import {validarToken} from "../controllers/autenticacion.js"


const rutaAsignacion = Router();

rutaAsignacion.post("/registrarAsignacion",  validarToken, asignacionC, registrarAsignacion);
rutaAsignacion.get("/listarAsignacion", validarToken, listarAsignacion);
rutaAsignacion.put("/actualizarAsignacion/:id", validarToken, asignacionA, actualizarAsignacion);
rutaAsignacion.put("/estadoAsignacion/:id", validarToken, estadoAsignacion);
rutaAsignacion.get("/buscarAsignacion/:id", validarToken, buscarAsignacion);

export default rutaAsignacion