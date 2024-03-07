import { Router } from "express";
import { ValidateProduccion,actualizar } from "../../validate/Produccion.js";
import { BuscarProduccion, actualizarProduccion, listarProduccion, registrarProduccion } from "../controllers/Produccion.js";


const produccion = Router()

produccion.get('/listarProduccion',listarProduccion);
produccion.post('/RegistraProduccion',ValidateProduccion,registrarProduccion);
produccion.get('/BuscarProduccion',BuscarProduccion);
produccion.put('/ActualizarProduccion/id_produccion',actualizar,actualizarProduccion);

export {produccion}