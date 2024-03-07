import { pool } from "../database/conexion.js";
import { validationResult } from 'express-validator';

export const listarCostos = async (req, res) => {
    try {
        const [listar] = await pool.query('SELECT * FROM costos');

        if (listar.length > 0) {
            res.status(200).json(listar);
        } else {
            res.status(400).json({
                status: 400,
                message: 'no hay ningun costo'
            });
        }
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: 'error en el servidor',
        });
    }
};

export const registrarCostos = async (req, res) => {
    try {
        const error = validationResult(req);

        if (!error.isEmpty()) {
            return res.status(400).json({
                errors: error.array() 
            });
        }

        const { fk_id_lotes, fk_id_recursos, egresos } = req.body;
        const [Registrar] = await pool.query('INSERT INTO costos (fk_id_lotes, fk_id_recursos, egresos) Values(?,?,?)', [fk_id_lotes, fk_id_recursos, egresos]);

        if (Registrar.affectedRows > 0) {
            res.status(200).json({
                status: 200,
                message: 'se Registró correctamente'
            });
        } else {
            res.status(400).json({
                status: 400,
                message: 'campo obligatorio'
            });
        }
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: 'error en el servidor',
            error: error.message
        });
    }
};

export const BuscarCostos = async (req, res) => {
    try {
        const { id_costos } = req.body;
        const consultar = 'SELECT * FROM costos WHERE id_costos LIKE ?';
        const [resultado] = await pool.query(consultar, [`%${id_costos}%`]);

        if (resultado.length > 0) {
            return res.status(200).json({ resultado });
        } else {
            res.status(404).json({
                status: 404,
                message: "No se encontraron resultados ",
            });
        }
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: "error en el servidor ",
        });
    }
};

export const actualizarCostos = async (req, res) => {
    try {
        const error = validationResult(req);
        if (!error.isEmpty()) {
            return res.status(400).json({ error: error.array() });
        }

        const { id_costos } = req.params;
        const { fk_id_lotes, fk_id_recursos, egresos } = req.body;

        if (!fk_id_lotes && !fk_id_recursos && !egresos) {
            return res.status(400).json({
                message: 'se requiere uno de los campos para actualizar'
            });
        }

        const [addcostos] = await pool.query('SELECT * FROM costos WHERE id_costos=?', [id_costos]);

        if (addcostos.length === 0) {
            return res.status(400).json({ status: 400, message: 'costo no encontrado' });
        }

        const UpdateValue = {
            fk_id_lotes: fk_id_lotes || addcostos[0].fk_id_lotes,
            fk_id_recursos: fk_id_recursos || addcostos[0].fk_id_recursos,
            egresos: egresos || addcostos[0].egresos,
        };

        const updateQuery = 'UPDATE costos SET fk_id_lotes=?, fk_id_recursos=?, egresos=? WHERE id_costos=?'; // Corregido el updateQuery

        const [Actualiza] = await pool.query(updateQuery, [UpdateValue.fk_id_lotes, UpdateValue.fk_id_recursos, UpdateValue.egresos, id_costos]); // Corregido el uso de UpdateValue

        if (Actualiza.affectedRows > 0) {
            res.status(200).json({
                "mensaje": "ha sido actualizado"
            });
        } else {
            res.status(400).json({
                status: 400,
                message: "No se encontraron resultados para la actualización"
            });
        }
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: 'error en el servidor',
            error: error.message
        });
    }
};
/*
export const eliminarProduccion = async (req, res) => {
    try {
        // Obtiene el ID de la producción desde el header
        const id_produccion = req.headers['id_produccion'];

        // Verifica si se proporcionó el ID
        if (!id_produccion) {
            return res.status(400).json({
                status: 400,
                message: 'Se requiere proporcionar el ID de la producción en el header'
            });
        }

        // Realiza la consulta para eliminar la producción con el ID proporcionado
        const [result] = await pool.query('DELETE FROM produccion WHERE id_produccion = ?', [id_produccion]);

        // Verifica si se eliminó correctamente
        if (result.affectedRows > 0) {
            res.status(200).json({
                status: 200,
                message: 'Se eliminó la producción con éxito'
            });
        } else {
            res.status(404).json({
                status: 404,
                message: 'No se encontró ninguna producción con el ID proporcionado'
            });
        }
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: 'Error en el servidor'
        });
    }
};
*/