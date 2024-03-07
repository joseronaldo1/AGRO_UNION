import { pool } from "../database/conexion.js";
import { validationResult } from "express-validator";

export const listarProduccion = async (req, res) => {
    try {
        const [listar] = await pool.query('SELECT * FROM produccion');

        if (listar.length > 0) {
            res.status(200).json(listar);
        } else {
            res.status(400).json({
                status: 400,
                message: 'no hay ningun produccion'
            });
        }
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: 'error en el servidor',
        });
        console.log(error);
    }
};

export const registrarProduccion = async (req, res) => {
    try {
        const error = validationResult(req);

        if (!error.isEmpty()) {
            return res.status(400).json({
                errors: error.array() 
            });
        }

        const { cantidad_produccion, precio, fk_variedad_cultivo } = req.body;

        if (!cantidad_produccion || !precio || !fk_variedad_cultivo) {
            return res.status(400).json({
                message: 'se requieren los campos'
            });
        }

        const [Registrar] = await pool.query('INSERT INTO produccion(cantidad_produccion,precio,fk_variedad_cultivo) Values(?,?,?)',
            [cantidad_produccion, precio, fk_variedad_cultivo]);

        if (Registrar.affectedRows > 0) {
            res.status(200).json({
                status: 200,
                message: 'se Registró correctamente'
            });
        } else {
            res.status(400).json({
                status: 400,
                message: 'No se ha podido registrar'
            });
        }
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: 'error en el servidor'
        });
        console.log(error);
    }
};

export const BuscarProduccion = async (req, res) => {
    try {
        const { fk_variedad_cultivo } = req.body;
        const consultar = 'SELECT * FROM produccion WHERE fk_variedad_cultivo LIKE ?';
        const [resultado] = await pool.query(consultar, [`%${fk_variedad_cultivo}%`]);

        if (resultado.length > 0) {
            return res.status(200).json({ resultado });
        } else {
            res.status(404).json({
                status: 404,
                message: "No se encontraron resultados para la fecha ",
            });
        }
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: "error en el servidor ",
        });
    }
};

export const actualizarProduccion = async (req, res) => {
    try {
        const error = validationResult(req);
        if (!error.isEmpty()) {
            return res.status(400).json({ error: error.array() });
        }

        const { id_produccion } = req.params;
        const { cantidad_produccion, precio, fk_variedad_cultivo } = req.body;

        // Validar que al menos uno de los campos esté presente
        if (!cantidad_produccion && !precio && !fk_variedad_cultivo) {
            return res.status(400).json({
                message: 'Se requiere al menos uno de los campos para actualizar (cantidad, precio, variedad cultivo)'
            });
        }

        // Consultar el registro existente
        const [existingProduccion] = await pool.query('SELECT * FROM produccion WHERE id_produccion=?', [id_produccion]);

        if (existingProduccion.length === 0) {
            return res.status(404).json({ status: 404, message: 'Producción no encontrada' });
        }

        // Valores para la actualización
        const updateValues = {
            cantidad_produccion: cantidad_produccion || existingProduccion[0].cantidad_produccion,
            precio: precio || existingProduccion[0].precio,
            fk_variedad_cultivo: fk_variedad_cultivo || existingProduccion[0].fk_variedad_cultivo,
        };

        // Consulta de actualización con placeholders
        const updateQuery = 'UPDATE produccion SET cantidad_produccion=?, precio=?, fk_variedad_cultivo=? WHERE id_produccion=?';

        // Ejecutar la consulta con los valores y el id_produccion
        const [result] = await pool.query(updateQuery, [
            updateValues.cantidad_produccion,
            updateValues.precio,
            updateValues.fk_variedad_cultivo,
            id_produccion  // id_produccion está incluido como parte de los parámetros
        ]);

        // Manejar la respuesta
        if (result.affectedRows > 0) {
            res.status(200).json({
                status: 200,
                message: result.changedRows > 0
                    ? `Producción con ID ${id_produccion} actualizada con éxito`
                    : 'Sin cambios realizados',
            });
        } else {
            res.status(404).json({
                status: 404,
                message: `No se encontraron resultados para la actualización con ID ${id_produccion}`,
            });
        }
    } catch (error) {
        console.error(error); // Log del error para depuración
        return res.status(500).json({
            status: 500,
            message: 'Error en el servidor',
        });
    }
};



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




//nesecito listar o buscar la infotmacion que ciando ponga ek fkk muestre nombre el numero del fk y la cantidad de produccion y el precio
export const BuscarProduccionPlus = async (req, res) => {
    try {
        const { fk_variedad_cultivo } = req.body;

        // Consulta para obtener información de producción y su variedad de cultivo asociada
        const consultar = `
        SELECT produccion.id_produccion, produccion.cantidad_produccion, produccion.precio, varidas.nombre_variedad
        FROM produccion
        JOIN varidas ON produccion.fk_variedad_cultivo = varidas.id_variedad
        WHERE produccion.fk_variedad_cultivo LIKE ?;
        `;

        const [resultado] = await pool.query(consultar, [fk_variedad_cultivo]);

        if (resultado.length > 0) {
            return res.status(200).json({ resultado });
        } else {
            res.status(404).json({
                status: 404,
                message: "No se encontraron resultados para el fk_variedad_cultivo proporcionado",
            });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({
            status: 500,
            message: "Error en el servidor",
        });
    }
};

