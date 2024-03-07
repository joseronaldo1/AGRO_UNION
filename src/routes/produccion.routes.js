import { Router } from "express";
import { ValidateCostos, actualizar } from "../../validate/costos.js";
import { BuscarCostos, actualizarCostos, listarCostos, registrarCostos} from "../controllers/costos.controller.js";

const produccion = Router()

produccion.get('/listarCosto',listarCostos)
produccion.post('/RegistrarCosto',ValidateCostos, registrarCostos)
produccion.get('/BuscarCosto',BuscarCostos)
produccion.put('/ActualizarCosto/:id_costos',actualizar, actualizarCostos)


export default produccion