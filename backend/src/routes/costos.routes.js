import { Router } from "express";
import { ValidateCostos, actualizar } from "../../validate/costos.js";
import { BuscarCostos, actualizarCostos, listarCostos, registrarCostos} from "../controllers/Costos.js";

const costos = Router()

costos.get('/listarCosto',listarCostos)
costos.post('/RegistrarCosto',ValidateCostos, registrarCostos)
costos.get('/BuscarCosto',BuscarCostos)
costos.put('/ActualizarCosto/:id_costos',actualizar, actualizarCostos)


export default costos