import { Router } from "express";
import { listarA,RegistrarA,ActualizarA,DesactivarA,BuscarA } from "../controllers/Actividad.controller.js";
import { validarRA, validarRR } from "../../validate/actividad.js";

import {ValidarToken} from "../controllers/autenticacion.js";

const rutaDeActividad = Router()

//localhost:4000/VariedadCultivo
rutaDeActividad.get("/Listara",ValidarToken, listarA);
rutaDeActividad.post("/Registrara",ValidarToken, validarRR, RegistrarA);
rutaDeActividad.put("/Actualizara/actividad/:id",ValidarToken, validarRA, ActualizarA);
rutaDeActividad.put("/Desactivara/actividad/:id",ValidarToken, DesactivarA);
rutaDeActividad.get("/Buscar/actividad/:id",ValidarToken, BuscarA);

export { rutaDeActividad };
