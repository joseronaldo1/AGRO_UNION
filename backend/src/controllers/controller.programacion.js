import { pool } from "../database/conexion.js";
import {validationResult} from "express-validator"

// CRUD - Registrar
export const registrarProgramacion = async (req, res) => {
    try {

        const errors= validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json(errors);
        }

        const { fecha_inicio, fecha_fin, fk_id_usuario, fk_actividad, fk_id_cultivo, estado } = req.body;
        const [result] = await pool.query("INSERT INTO programacion (fecha_inicio, fecha_fin, fk_id_usuario, fk_actividad, fk_id_cultivo,  estado) VALUES (?,?,?,?,?,?)", [fecha_inicio, fecha_fin, fk_id_usuario, fk_actividad, fk_id_cultivo, estado]);

        const [usuarioExist] = await pool.query('SELECT * FROM usuarios where id_usuario = ?', [fk_id_usuario])
        if(usuarioExist.length === 0) {
            return res.status(404).json({
                status: 404,
                message: "El usuario no existe, registre un usuario 'D"
            })
        }
        const [actividadExist] = await pool.query('SELECT * FROM actividad where id_actividad = ?', [fk_actividad])
        if(actividadExist.length === 0) {
            return res.status(404).json({
                status: 404,
                message: "La actividad no existe, registre una actividad 'D"
            })
        }
        const [cultivoExist] = await pool.query('SELECT * FROM cultivo where id_cultivo = ?', [fk_id_cultivo])
        if(cultivoExist.length === 0) {
            return res.status(404).json({
                status: 404,
                message: "El cultivo no existe, registre una actividad 'D"
            })
        }
        /*  */
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
export const listarProgramacion = async (req, res) => {
    try {
        const [result] = await pool.query("SELECT * FROM programacion");

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
export const actualizarProgramacion = async (req, res) => {
    try {
        const errors= validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json(errors);
        }

        const { id } = req.params;
        const { fecha_inicio, fecha_fin, fk_id_usuario, fk_actividad, fk_id_cultivo, estado } = req.body;
        // Primero, obtén el registro existente para saber cuál es el valor actual de fecha_inicio
        const [oldTipoRecurso] = await pool.query("SELECT * FROM programacion WHERE id_programacion=?", [id]);
        // Luego, actualiza el registro con los nuevos valores, utilizando parámetros para evitar inyecciones SQL
        const [result] = await pool.query(`UPDATE programacion SET fecha_inicio = ?, fecha_fin = ?, fk_id_usuario = ?, fk_actividad = ?, fk_id_cultivo = ?, estado = ? WHERE id_programacion = ?`, [fecha_inicio || oldTipoRecurso[0].fecha_inicio, fecha_fin || oldTipoRecurso[0].fecha_fin, fk_id_usuario || oldTipoRecurso[0].fk_id_usuario, fk_actividad || oldTipoRecurso[0].fk_actividad, fk_id_cultivo || oldTipoRecurso[0].fk_id_cultivo, estado || oldTipoRecurso[0].estado, id]);
        
        const [usuarioExist] = await pool.query('SELECT * FROM usuarios where id_usuario = ?', [fk_id_usuario])
        if(usuarioExist.length === 0) {
            return res.status(404).json({
                status: 404,
                message: "El usuario no existe, registre un usuario 'D"
            })
        }
        const [actividadExist] = await pool.query('SELECT * FROM actividad where id_actividad = ?', [fk_actividad])
        if(actividadExist.length === 0) {
            return res.status(404).json({
                status: 404,
                message: "La actividad no existe, registre una actividad 'D"
            })
        }
        const [cultivoExist] = await pool.query('SELECT * FROM cultivo where id_cultivo = ?', [fk_id_cultivo])
        if(cultivoExist.length === 0) {
            return res.status(404).json({
                status: 404,
                message: "El cultivo no existe, registre una actividad 'D"
            })
        }
        
        if (result.affectedRows > 0) {
            res.status(200).json({
                status: 200,
                message: 'Se actualizó con éxito',
            });
        } else {
            res.status(404).json({
                status: 404,
                message: 'No se encontró la programacion para actualizar'
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
export const estadoProgramacion = async (req, res) => {
    try {
        const { id } = req.params;
        const { estado } = req.body;
        const [oldTipoRecurso] = await pool.query("SELECT * FROM programacion WHERE id_programacion=?", [id]);

        const [result] = await pool.query( `UPDATE programacion SET estado = ${estado ? `'${estado}'` : `'${oldTipoRecurso[0].estado}'`} WHERE id_programacion=?`,
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
    export const buscarProgramacion = async (req, res) => {
    try {
        const { id } = req.params;
        const [result] = await pool.query("SELECT * FROM programacion WHERE id_programacion=?", [id]);
                        
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




