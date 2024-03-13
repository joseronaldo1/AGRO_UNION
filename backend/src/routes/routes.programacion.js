import { Router } from "express";
import { actualizarProgramacion, registrarProgramacion, listarProgramacion, buscarProgramacion, estadoProgramacion } from "../controllers/controller.programacion.js";

import { programacionA } from "../../validate/programacion.js"
import { programacionC } from "../../validate/programacion.js"

/* import {validarToken} from "../controllers/autenticacion.js" */


const rutaProgramacion = Router(); 
//
rutaProgramacion.post("/registrarProgramacion",  /* validarToken, */ programacionC, registrarProgramacion);
rutaProgramacion.get("/listarProgramacion", /* validarToken, */ listarProgramacion);
rutaProgramacion.put("/actualizarProgramacion/:id", /* validarToken, */ programacionA, actualizarProgramacion);
rutaProgramacion.put("/estadoProgramacion/:id", /* validarToken, */ estadoProgramacion);
rutaProgramacion.get("/buscarProgramacion/:id", /* validarToken, */ buscarProgramacion);

export default rutaProgramacion

