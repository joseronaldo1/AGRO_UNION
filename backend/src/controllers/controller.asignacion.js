import { pool } from "../database/conexion.js";
import {validationResult} from "express-validator"

// CRUD - Registrar
export const registrarAsignacion = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { fecha_inicio, fecha_fin, fk_id_usuario, fk_actividad, estado } = req.body;

        // Verificar si el usuario existe
        const [usuarioExist] = await pool.query('SELECT * FROM usuarios WHERE id_usuario = ?', [fk_id_usuario]);
        if (usuarioExist.length === 0) {
            return res.status(404).json({
                status: 404,
                message: "El usuario no existe. Registre primero un usuario."
            });
        }

        // Verificar si la actividad existe
        const [actividadExist] = await pool.query('SELECT * FROM actividad WHERE id_actividad = ?', [fk_actividad]);
        if (actividadExist.length === 0) {
            return res.status(404).json({
                status: 404,
                message: "La actividad no existe. Registre primero una actividad."
            });
        }

        const [result] = await pool.query("INSERT INTO asignacion (fecha_inicio, fecha_fin, fk_id_usuario, fk_actividad, estado) VALUES (?,?,?,?,?)", [fecha_inicio, fecha_fin, fk_id_usuario, fk_actividad, estado]);

        if (result.affectedRows > 0) {
            return res.status(200).json({
                status: 200,
                message: 'Se registró con éxito'
            });
        } else {
            return res.status(404).json({
                status: 404,
                message: 'No se registró'
            });
        }
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: error.message || 'Error interno del servidor'
        });
    }
};


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

        if (!fecha_inicio && !fecha_fin && !fk_id_usuario && !fk_actividad && !estado) {
            return res.status(400).json({
                message: 'se requiere uno de los campos para actualizar (fecha_inicio, fecha_fin, fk_id_usuario, fk_actividad, estado)'
            });
        }

        const [oldTipoRecurso] = await pool.query("SELECT * FROM asignacion WHERE id_asignacion=?", [id]);

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




