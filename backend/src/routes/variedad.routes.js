import { Router } from "express";
import { registrarVariedad, listarVariedades, actualizarVariedad, desactivarVariedad, buscarVariedad } from "../controllers/variedad.controller.js";
import { validarRegistroVariedad, validarActualizacionVariedad } from "../validate/validarVariedad.js";
import {validarToken} from "../controllers/variedad.controller.js"

const rutaDeVariedad = Router();

rutaDeVariedad.post("/registrarVariedad", validarRegistroVariedad, registrarVariedad);
rutaDeVariedad.get("/listarVariedades",validarToken, listarVariedades);
rutaDeVariedad.put("/actualizarVariedad/:id", validarActualizacionVariedad, actualizarVariedad);
//rutaDeVariedad.put("/desactivarVariedad/:id", desactivarVariedad);
rutaDeVariedad.get("/buscarVariedad/:id", buscarVariedad);

export default rutaDeVariedad;
