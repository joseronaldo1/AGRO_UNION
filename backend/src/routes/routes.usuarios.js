import { Router } from "express"
import  {actualizarUsuario, listarUsuarios, buscarUsuario, desactivarUsuario, registrarUsuarios} from '../controllers/controller.usuarios.js'

import {validarUsuario} from '../../validate/validate.usuarios.js'
import { validarToken } from '../controllers/autenticacion.js'

const rutaUsuario = Router();

rutaUsuario.get('/listarUsuario', validarToken,listarUsuarios);  
rutaUsuario.post('/registrarUsuario', validarToken,validarUsuario,registrarUsuarios);
rutaUsuario.post('/desactivarUsuario/:id_usuario',validarToken, desactivarUsuario);
rutaUsuario.put('/actualizarUsuario/:id_usuario',validarToken, validarUsuario,actualizarUsuario);
rutaUsuario.get('/buscarUsuario/:id_usuario',validarToken, buscarUsuario);


export default rutaUsuario;
