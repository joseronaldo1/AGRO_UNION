import { pool } from "../database/conexion.js";
import {validationResult} from "express-validator"

// CRUD - Registrar
export const registrarFinca = async (req, res) => {
    try {

        const errors= validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json(errors);
        }

        const { nombre_finca, longitud, latitud } = req.body;
        const [result] = await pool.query("INSERT INTO finca (nombre_finca, longitud, latitud) VALUES (?,?,?)", [nombre_finca, longitud, latitud]);

        if (result.affectedRows > 0) {
            res.status(200).json({
                status: 200,
                message: 'Se registró con éxito la finca'
            });
        } else {
            res.status(404).json({
                status: 404,
                message: 'No se registró la finca'
            });
        }
        } catch (error) {
            res.status(500).json({
                status: 500,
                message: error.message || 'Error en el sistema'
        });
    }
}




// CRUD - Listar
export const listarFinca = async (req, res) => {
    try {
        const [result] = await pool.query("SELECT * FROM finca");

        if (result.length > 0) {
                res.status(200).json(result);
            } else {
                res.status(404).json({
                    status: 404,
                    message: 'No hay ninguna finca'
                });
            }
        } catch (error) {
        res.status(500).json({
            message: error.message || 'Error en el sistema'
        });
    }
}

// CRUD - Actualizar
export const actualizarFinca = async (req, res) => {
    try {
        const errors= validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json(errors);
        }

        const { id } = req.params;
        const { nombre_finca, longitud, latitud } = req.body;
        // Primero, obtén el registro existente para saber cuál es el valor actual de fecha_inicio
        const [oldFinca] = await pool.query("SELECT * FROM finca WHERE id_finca=?", [id]);
        // Luego, actualiza el registro con los nuevos valores, utilizando parámetros para evitar inyecciones SQL
        const [result] = await pool.query(`UPDATE finca SET nombre_finca = ?, longitud = ?, latitud = ? WHERE id_finca = ?`, [nombre_finca || oldFinca[0].nombre_finca, longitud || oldFinca[0].longitud, latitud || oldFinca[0].latitud, id]);
        
        if (result.affectedRows > 0) {
            res.status(200).json({
                status: 200,
                message: 'Se actualizó con éxito la finca',
            });
        } else {
            res.status(404).json({
                status: 404,
                message: 'No se encontró la finca para actualizar'
            });
        }
        } catch (error) {
        res.status(500).json({
            status: 500,
            message: error.message || 'Error en el sistema'
        });
    }
};

// CRUD -buscar
    export const buscarFinca = async (req, res) => {
    try {
        const { id } = req.params;
        const [result] = await pool.query("SELECT * FROM finca WHERE id_finca=?", [id]);
                        
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
            message: error.message || 'Error en el sistema'
        });
    }
}
