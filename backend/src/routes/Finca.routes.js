import { Router } from "express";
import { listarFinca, RegistroFinca, ActualizarFinca, BuscarFinca } from "../controllers/Finca.controller.js";
import { validarFincaA } from "../../validate/Finca.js";
import { validarFincaR } from "../../validate/Finca.js";
import { ValidarToken } from "../controllers/autenticacion.js";

const router = Router();

router.get("/listarFinca", ValidarToken, listarFinca);
router.post("/RegistroFinca", ValidarToken, validarFincaR, RegistroFinca);
router.put("/actualizarFinca/:id", ValidarToken, validarFincaA, ActualizarFinca);
router.get("/buscarFinca/:id", ValidarToken, BuscarFinca);

export default router;
