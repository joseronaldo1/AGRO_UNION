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

export const Actualizarlote = async (req,res) => {
/// corrugei Actualizacion  deje registrar solo uno 

// corrige que me esta borrando los datos al actualizar 

// corrige bien la validacion porfa




    try {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            res.status(400).json({errors})
        }
        const {id_lote} = req.params
        const {nombre, longitud, latitud, fk_id_finca, fk_id_produccion, fk_id_variedad, estado} = req.body
        const [ oldUser ] = await pool.query("select * from lotes where id_lote=?", [id_lote])
        const [ resultado ] =await pool.query(`update lotes set nombre="${nombre?nombre:oldUser[0].nombre}", longitud="${longitud?longitud:oldUser[0].longitud}", latitud="${latitud?latitud:[0].latitud}", fk_id_finca="${fk_id_finca?fk_id_finca:oldUser[0].fk_id_finca}", fk_id_produccion="${fk_id_produccion?fk_id_produccion:oldUser[0].fk_id_produccion}", fk_id_variedad="${fk_id_variedad?fk_id_variedad:oldUser[0].fk_id_variedad}", fk_id_variedad="${estado?estado:oldUser[0].estado}" where id_lote=${parseInt(id_lote)}`)

        if (resultado.aproductosRows > 0) {
            res.status(200).json({
                "mensaje": "ha sido actualizado"
            })
        } else {
            productostus(404).json({
                "mensaje": "No se pudo actualizar"
            })
        }

    } catch (error) {
        res.status(500).json({
            "mensaje": error
        })
    }   
}

export const Buscarlote = async (req, res) => {
    try {
        const { id_lote } = req.params;
        const [ resultado ] = await pool.query("select * from actividades where id_lote=?", [id_lote])

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

export const Desactivarlote = async (req, res) => {
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