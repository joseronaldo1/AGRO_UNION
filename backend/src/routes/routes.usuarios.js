import { Router } from "express"
import  {actualizarUsuario, listarUsuarios, buscarUsuario, desactivarUsuario, registrarUsuarios} from '../controllers/controller.usuarios.js'

import {validarUsuario} from '../../validate/validate.usuarios.js'
import { validarToken } from '../controllers/autenticacion.js'

const rutaUsuario = Router();

rutaUsuario.get('/listarUsuario', listarUsuarios);  
rutaUsuario.post('/registrarusuario', validarUsuario,registrarUsuarios);
rutaUsuario.post('/desactivarUsuario/:id_usuario', desactivarUsuario);
rutaUsuario.put('/actualizarUsuario/:id_usuario', actualizarUsuario);
rutaUsuario.get('/buscarUsuario/:id_usuario', buscarUsuario);


export default rutaUsuario;
