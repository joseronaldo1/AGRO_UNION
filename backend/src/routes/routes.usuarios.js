import { Router } from "express"
import  {actualizarUsuario, listarUsuarios, buscarUsuario, desactivarUsuario, registrarUsuarios} from '../controllers/controller.usuarios.js'

import {validarUsuario, validarUsu} from '../../validate/validate.usuarios.js'
import { validarToken } from '../controllers/autenticacion.js'

const rutaUsuario = Router();

rutaUsuario.get('/listarUsuario', validarToken,listarUsuarios);  
rutaUsuario.post('/registrarUsuario',validarUsuario,registrarUsuarios);
rutaUsuario.put('/desactivarUsuario/:id_usuario',validarToken, desactivarUsuario);
rutaUsuario.put('/actualizarUsuario/:id_usuario',validarToken, validarUsu,actualizarUsuario);
rutaUsuario.get('/buscarUsuario/:id_usuario',validarToken, buscarUsuario);


export default rutaUsuario;

