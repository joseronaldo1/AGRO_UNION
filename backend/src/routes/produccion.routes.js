import { Router } from "express";
import { ValidateProduccion,actualizar } from "../../validate/Produccion.js";
import { BuscarPoduccion, actualizarProduccion, listarProduccion, registrarProduccion } from "../controllers/Produccion.js";

const produccion = Router()

produccion.get('/listarProduccion',listarProduccion),
produccion.post('/RegistraProduccion',ValidateProduccion,registrarProduccion),
produccion.get('/BuscarProduccion',BuscarPoduccion),
produccion.put('/ActualizarProduccion',actualizar,actualizarProduccion)


export {produccion}