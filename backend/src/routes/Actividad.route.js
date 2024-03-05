import { Router } from "express";
import { listarA,RegistrarA,ActualizarA,DesactivarA,BuscarA } from "../controllers/Actividad.controller.js";
import { validarRA, validarRR } from "../validate/actividad.js";

const rutaDeActividad = Router()

//localhost:4000/VariedadCultivo
rutaDeActividad.get("/Listara", listarA);
rutaDeActividad.post("/Registrara",validarRR, RegistrarA);
rutaDeActividad.put("/Actualizara/actividad/:id",validarRA, ActualizarA);
rutaDeActividad.put("/Desactivara/actividad/:id", DesactivarA);
rutaDeActividad.get("/Buscar/actividad/:id", BuscarA);

export { rutaDeActividad };
