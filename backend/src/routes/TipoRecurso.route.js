import { Router } from "express";
import { listarTipoRecurso, RegistroTipoRecurso, ActualizarTipoRecurso, BuscarTipoRecurso 
} from "../controllers/TipoRecurso.controller.js";
import { validarTra } from "../../validate/tipo_recurso.js";
import { validarTrr } from "../../validate/tipo_recurso.js";

import { validarToken } from "../controllers/autenticacion.js";

const rutaDeTipoRecurso = Router()

//localhost:4000/VariedadCultivo
rutaDeTipoRecurso.get("/listarRecurso", validarToken, listarTipoRecurso);
rutaDeTipoRecurso.post("/RegistroRecurso", validarToken, validarTrr, RegistroTipoRecurso);
rutaDeTipoRecurso.put("/actualizarRecurso/:id",validarToken ,validarTra, ActualizarTipoRecurso);
/* rutaDeTipoRecurso.put("/desactivar/Recurso/:id", DesactivarTipoRecurso); */
rutaDeTipoRecurso.get("/buscarRecurso/:id", validarToken, BuscarTipoRecurso);

export { rutaDeTipoRecurso };

