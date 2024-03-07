import { Router } from "express";
import { listarTipoRecurso, RegistroTipoRecurso, ActualizarTipoRecurso, BuscarTipoRecurso 
} from "../controllers/TipoRecurso.controller.js";
import { validarTra } from "../../validate/tipo_recurso.js";
import { validarTrr } from "../../validate/tipo_recurso.js";

import {ValidarToken} from "../controllers/autenticacion.js";
const rutaDeTipoRecurso = Router()

//localhost:4000/VariedadCultivo
rutaDeTipoRecurso.get("/listarRecurso", ValidarToken, listarTipoRecurso);
rutaDeTipoRecurso.post("/RegistroRecurso", ValidarToken, validarTrr, RegistroTipoRecurso);
rutaDeTipoRecurso.put("/actualizarRecurso/:id",ValidarToken ,validarTra, ActualizarTipoRecurso);
/* rutaDeTipoRecurso.put("/desactivar/Recurso/:id", DesactivarTipoRecurso); */
rutaDeTipoRecurso.get("/buscarRecurso/:id", ValidarToken, BuscarTipoRecurso);

export { rutaDeTipoRecurso };

/////
