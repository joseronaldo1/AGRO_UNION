import { Router } from "express";
import { actualizarAsignacion, registrarAsignacion, listarAsignacion, buscarAsignacion, estadoAsignacion } from "../controllers/controller.asignacion.js";

import { asignacionA } from "../../validate/asignacion.js";
import { asignacionC } from "../../validate/asignacion.js";


const rutaAsignacion = Router();

rutaAsignacion.post("/registrarAsignacion", asignacionC, registrarAsignacion);
rutaAsignacion.get("/listarAsignacion", listarAsignacion);
rutaAsignacion.put("/actualizarAsignacion/:id", asignacionA, actualizarAsignacion);
rutaAsignacion.put("/estadoAsignacion/:id", estadoAsignacion);
rutaAsignacion.get("/buscarAsignacion/:id", buscarAsignacion);

export default rutaAsignacion;