import { Router } from "express";
import { registrarFinca,listarFinca, actualizarFinca, buscarFinca } from "../controllers/Finca.controller.js";
import { validarFincaR } from "../validate/Finca.js";
import { validarFincaA } from "../validate/Finca.js";
import { validarToken} from "../controllers/Finca.controller.js"


const rutaFinca = Router();

rutaFinca.post("/registrarFinca", validarFincaR, registrarFinca);
rutaFinca.get("/listarFinca",validarToken, listarFinca);
rutaFinca.put("/actualizarFinca/:id", validarFincaA, actualizarFinca);
rutaFinca.get("/buscarFinca/:id", buscarFinca);

export default rutaFinca;


