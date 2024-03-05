import { Router } from "express";
import { listarTipoRecurso, RegistroTipoRecurso, ActualizarTipoRecurso, BuscarTipoRecurso 
} from "../controllers/TipoRecurso.controller.js";
import { validarTra } from "../validate/tipo_recurso.js";
import { validarTrr } from "../validate/tipo_recurso.js";
const rutaDeTipoRecurso = Router()

//localhost:4000/VariedadCultivo
rutaDeTipoRecurso.get("/listarRecurso", listarTipoRecurso);
rutaDeTipoRecurso.post("/RegistroRecurso",validarTrr, RegistroTipoRecurso);
rutaDeTipoRecurso.put("/actualizarRecurso/:id",validarTra, ActualizarTipoRecurso);
/* rutaDeTipoRecurso.put("/desactivar/Recurso/:id", DesactivarTipoRecurso); */
rutaDeTipoRecurso.get("/buscarRecurso/:id", BuscarTipoRecurso);

export { rutaDeTipoRecurso };

/////
