import { pool } from "../database/conexion.js"
import {validationResult} from 'express-validator'


export const listarlotes = async (req, res) =>{
    try{
        const [resultado] = await pool.query("select * from lotes")

        if (resultado.length > 0){
            res.status(200).json(resultado)
        }else {
            res.status(404).json({
                "mensaje": "no se pudo mostar hay algun error"
            })
        }  

    }catch(error){
        res.status(500).json({
            "mensaje": error
        })
    }
}

export const Registrarlotes = async (req, res) => {
    try {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            res.status(400).json({errors})
        }
        const {nombre, longitud, latitud, fk_id_finca, fk_id_produccion, fk_id_variedad, estado} = req.body
        const [resultado] = await pool.query("insert into lotes(nombre, longitud, latitud, fk_id_finca, fk_id_produccion, fk_id_variedad, estado) values (?,?,?,?,?,?,?)", [nombre, longitud, latitud, fk_id_finca, fk_id_produccion, fk_id_variedad, estado])

        if (resultado.affectedRows > 0) {
            res.status(200).json({
                "mensaje": "lote registrado con exito"
            })
        } else {
            res.status(400).json({
                "mensaje": "hay un error no se pudo guardar"
            })
        }
    } catch (error) {
        res.status(500).json({
            "mensaje": error
        })
    }   
}

export const actualizarLote = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { id_lote } = req.params;
        const { nombre, longitud, latitud, fk_id_finca, fk_id_produccion, fk_id_variedad, estado } = req.body;

        // Verificar si el lote a actualizar existe
        const [oldLote] = await pool.query('SELECT * FROM lotes WHERE id_lote = ?', [id_lote]);
        if (oldLote.length === 0) {
            return res.status(404).json({ mensaje: 'El lote no existe.' });
        }

        const updateValues = {
            nombre: nombre || oldLote[0].nombre,
            longitud: longitud || oldLote[0].longitud,
            latitud: latitud || oldLote[0].latitud,
            fk_id_finca: fk_id_finca || oldLote[0].fk_id_finca,
            fk_id_produccion: fk_id_produccion || oldLote[0].fk_id_produccion,
            fk_id_variedad: fk_id_variedad || oldLote[0].fk_id_variedad,
            estado: estado || oldLote[0].estado,
        };

        const updateQuery = 'UPDATE lotes SET nombre=?, longitud=?, latitud=?, fk_id_finca=?, fk_id_produccion=?, fk_id_variedad=?, estado=? WHERE id_lote=?';
        const [resultado] = await pool.query(updateQuery, [updateValues.nombre, updateValues.longitud, updateValues.latitud, updateValues.fk_id_finca, updateValues.fk_id_produccion, updateValues.fk_id_variedad, updateValues.estado, parseInt(id_lote)]);

        if (resultado.affectedRows > 0) {
            res.status(200).json({ mensaje: 'El lote ha sido actualizado.' });
        } else {
            res.status(400).json({ mensaje: 'No se encontraron resultados para la actualización.' });
        }
    } catch (error) {
        res.status(500).json({ mensaje: 'Error en el servidor.', error: error.message });
    }
};


export const Buscarlote = async (req, res) => {
    try {
        const { id_lote } = req.params;
        const [ resultado ] = await pool.query("select * from lotes where id_lote=?", [id_lote])

        if (resultado.length > 0) {
            res.status(200).json(resultado)
        } else {
            res.status(400).json({
                "mensaje": "No se encontró nada con ese ID"
            })
        }

    }  catch (error) {
        res.status(500).json({
            "mensaje": error
        })     
    }
}

export const eliminarlote = async (req, res) => {
    try{
        const { id_lote } = req.params;
        const [ resultado ] = await pool.query("delete from lotes where id_lote=?", [id_lote])

        if (resultado.affectedRows > 0) {
            res.status(200).json({
                "mensaje": "desactivado con exito"
            })
        } else {
            res.status(404).json({
                "mensaje": "No se pudo desactivar"
            })
        }
    } catch (error) {
        res.status(500).json({
            "mensaje": error
        })
    }
}

export const desactivarlote = async (req, res) => {
    try {
        const { id_lote } = req.params;
        const [result] = await pool.query("UPDATE lotes SET estado='inactivo' WHERE id_lote=?", [id_lote]);
        
        if (result.affectedRows >  0) {
            res.status(200).json({
                status: 200,
                "mensaje": "El lote con el id "+id_lote+" ha sido desactivado."
            });
        } else {
            res.status(404).json({
                status: 404,
                "message": "No se pudo desactivar el lote"
            });
        }
    } catch (error) {
        res.status(500).json({
            status: 500,
            message: 'Error en el sistema: '+error
        });
    }
}
