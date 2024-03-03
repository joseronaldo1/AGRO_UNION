import {pool} from './database/conexion.js';
import { validationResult } from "express-validator";


export const listarUsuarios = async (req, res) => {
    try {
        const [ result ] = await pool.query('SELECT * FROM usuarios');
        if (result.length >  0) {
            res.status(200).json(result)
        } else {
            res.status(404).json({
                status: 404,
                "message": 'El usuario no esta registrado'
            });
        }
    } catch (error) {
        res.status(500).json({
            status:  500,
            message: 'Error en el sistema'+error
        })
    }
}

export const buscarUsuario = async (req, res) => {
    try {
        const { id_usuario } = req.params;
        const [result] = await pool.query("SELECT * FROM usuarios WHERE id_usuario=?", [id_usuario]);

        if (result.length > 0) {
            res.status(200).json(result);
        } else {
            res.status(404).json({
                status: 404,
                mensaje: "No se encontró un asuario con ese ID"
            });
        }
    } catch (error) {
        res.status(500).json({ 
            status: 500, 
            message: 'Error en el sistema: ' + error 
        });
    }
};

export const registrarUsuario = async (req, res) => {

    const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json(errors)
        }
    try {
        const {nombres,apellidos,correo,contraseña,rol,estado} = req.body;

            return res.status(400).json({
                status: 400,
                message: 'Los campos son requeridos'
            });
        

        const [result] = await pool.query('insert into usuarios ( nombres,apellidos,correo,contraseña,rol,estado) values (?, ?, ?, ?, ?, ?)', [nombres,apellidos,correo,contraseña,rol,estado]);
        if (result.affectedRows > 0) {
            res.status(200).json({
                status: 200,
                "message": "Se registró con exito el usuario "+nombres
            });
        } else {
            res.status(404).json({
                status: 404,
                "message": 'No se registró el usuario'
            });
        }
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: error.message
        });
    }
}

export const actualizarUsuario = async (req, res) => {
    try {
        const { nombres,apellidos,correo,contraseña,rol,estado} = req.body;
        const [result] = await pool.query(`UPDATE usuarios SET nombres=?, apellidos=?, contraseña=?, rol=?, estado=?`, [nombres,apellidos,correo,contraseña,rol,estado]);
         
            return res.status(400).json({
                status: 400,
                message: 'Los campos son requeridos'
            });
        

        if (result.affectedRows >  0) {
            res.status(200).json({ 
                status: 200,
                mensaje: "El usuario ha sido actualizado." 
            });
        } else {
            res.status(404).json({ 
                status: 404,
                mensaje: "No se pudo actualizar el usuario, inténtalo de nuevo." 
            });
        }
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: error.message
        });
    }
};

export const desactivarUsuario = async (req, res) => {
    try {
        const { id_usuario } = req.params;
        const [result] = await pool.query("UPDATE usuarios SET estado='inactivo' WHERE id_usuario=?", [id_usuario]);
        
        if (result.affectedRows >  0) {
            res.status(200).json({
                status: 200,
                "mensaje": "El usuario con el id "+id_usuario+" ha sido desactivado."
            });
        } else {
            res.status(404).json({
                status: 404,
                "message": "No se pudo desactivar el usuario"
            });
        }
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: 'Error en el sistema: '+error
        });
    }
}
