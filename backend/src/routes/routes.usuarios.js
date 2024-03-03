import { Router } from "express"
import  {actualizarUsuario, listarUsuarios, buscarUsuario, desactivarUsuario, registrarUsuario} from '../controllers/contoller.usuario.js'

const rutaUsuario = Router();

rutaUsuario.get('/listarUsuario', listarUsuarios);   
rutaUsuario.get('/buscarUsuario/:id_usuario', buscarUsuario);
rutaUsuario.post('/registrarUsuario', registrarUsuario);
rutaUsuario.post('/desactivarUsuario/:id_usuario', desactivarUsuario);
rutaUsuario.put('/actualizarUsuario/:id_usuario', actualizarUsuario);

export default rutaUsuario;
