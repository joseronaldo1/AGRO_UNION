import { pool } from "../database/conexion.js";
import {validationResult} from "express-validator"

// CRUD - Registrar
export const registrarAsignacion = async (req, res) => {
    try {

        const errors= validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json(errors);
        }

        const { fecha_inicio, fecha_fin, fk_id_usuario, fk_actividad, estado } = req.body;
        const [result] = await pool.query("INSERT INTO asignacion (fecha_inicio, fecha_fin, fk_id_usuario, fk_actividad, estado) VALUES (?,?,?,?,?)", [fecha_inicio, fecha_fin, fk_id_usuario, fk_actividad, estado]);

        if (result.affectedRows > 0) {
            res.status(200).json({
                status: 200,
                message: 'Se registró con éxito'
            });
        } else {
            res.status(404).json({
                status: 404,
                message: 'No se registró'
            });
        }
        } catch (error) {
            res.status(500).json({
                status: 500,
                message: error.message || 'Error interno del servidor'
        });
    }
}

// CRUD - Listar
export const listarAsignacion = async (req, res) => {
    try {
        const [result] = await pool.query("SELECT * FROM asignacion");

        if (result.length > 0) {
                res.status(200).json(result);
            } else {
                res.status(404).json({
                    status: 404,
                    message: 'No hay ninguna asignación'
                });
            }
        } catch (error) {
        res.status(500).json({
            message: error.message || 'Error interno del servidor'
        });
    }
}

// CRUD - Actualizar
export const actualizarAsignacion = async (req, res) => {
    try {
        const errors= validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json(errors);
        }

        const { id } = req.params;
        const { fecha_inicio, fecha_fin, fk_id_usuario, fk_actividad, estado } = req.body;
        // Primero, obtén el registro existente para saber cuál es el valor actual de fecha_inicio
        const [oldTipoRecurso] = await pool.query("SELECT * FROM asignacion WHERE id_asignacion=?", [id]);
        // Luego, actualiza el registro con los nuevos valores, utilizando parámetros para evitar inyecciones SQL
        const [result] = await pool.query(`UPDATE asignacion SET fecha_inicio = ?, fecha_fin = ?, fk_id_usuario = ?, fk_actividad = ?, estado = ? WHERE id_asignacion = ?`, [fecha_inicio || oldTipoRecurso[0].fecha_inicio, fecha_fin || oldTipoRecurso[0].fecha_fin, fk_id_usuario || oldTipoRecurso[0].fk_id_usuario, fk_actividad || oldTipoRecurso[0].fk_actividad, estado || oldTipoRecurso[0].estado, id]);
        
        if (result.affectedRows > 0) {
            res.status(200).json({
                status: 200,
                message: 'Se actualizó con éxito',
            });
        } else {
            res.status(404).json({
                status: 404,
                message: 'No se encontró la asignacion para actualizar'
            });
        }
        } catch (error) {
        res.status(500).json({
            status: 500,
            message: error.message || 'Error interno del servidor'
        });
    }
};

// CRUD - Estado
export const estadoAsignacion = async (req, res) => {
    try {
        const { id } = req.params;
        const { estado } = req.body;
        const [oldTipoRecurso] = await pool.query("SELECT * FROM asignacion WHERE id_asignacion=?", [id]);

        const [result] = await pool.query( `UPDATE asignacion SET estado = ${estado ? `'${estado}'` : `'${oldTipoRecurso[0].estado}'`} WHERE id_asignacion=?`,
            [id]
        );
        if (result.affectedRows > 0) {
            res.status(200).json({
                status: 200,
                message: 'El estado se realizó correctamente'
            });
        } else {
            res.status(404).json({
                status: 404,
                message: 'El estado no se realizo correctamente'
            });
        }
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: error.message || 'Error interno del servidor'
        });
    }
};
// CRUD -buscar
    export const buscarAsignacion = async (req, res) => {
    try {
        const { id } = req.params;
        const [result] = await pool.query("SELECT * FROM asignacion WHERE id_asignacion=?", [id]);
                        
        if (result.length > 0) {
            res.status(200).json(result);
        } else {
            res.status(404).json({
                status: 404,
                message: 'No se encontraron resultados para la búsqueda'
            });
        }
        } catch (error) {
        res.status(500).json({
            status: 500,
            message: error.message || 'Error interno del servidor'
        });
    }
}




