
import { pool } from '../database/conexion.js';
import { validationResult } from 'express-validator';

export const listar = async (req,res) => {
    try{
    let sql = 'SELECT * FROM recursos';
    const [result] = await pool.query(sql);
    if (result.length > 0) {
      res.status(200).json(result);
    }else{
      res.status(404).json({'message': 'No se encontraron recursos '});
    }
  } catch(error){
    res.status(500).json({'status':500,'message':'error en el sistema: '+error});
  }
  };
  
  export const registrar = async (req, res) =>{
    try{
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
         return res.status(400).json({ errors: errors.array() });
      }
    const {fk_id_tipo_recursos, precio} = req.body;
  
    let sql =  `INSERT INTO recursos (fk_id_tipo_recursos, precio) VALUES (?, ?)`;
  
    const [rows] = await pool.query(sql,[fk_id_tipo_recursos, precio]);
    if (rows.affectedRows > 0) {
      res.status(200).json({'status':200,'message':'Registro exitoso de sus recursos'});
    }else{
      res.status(403).json({'status':403,'message':'Fallo el registro de sus recursos'});
    }
  } catch(error){
    res.status(500).json({'status':500,'message':'error en el sistema: '+error});
  }
  
  };
  
  

  export const actualizar = async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
         return res.status(400).json({ errors: errors.array() });
      }
      const { id_recursos} = req.params;
      const { fk_id_tipo_recursos, precio } = req.body;
  
      let sql = `
        UPDATE recursos
        SET fk_id_tipo_recursos = ?,
            precio = ?
        WHERE id_recursos= ?
      `;
  
      const [rows] = await pool.query(sql, [fk_id_tipo_recursos, precio, id_recursos]);
  
      if (rows.affectedRows > 0) {
        res.status(200).json({ status: 200, message: 'La informacion ha sido actualizada' });
      } else {
        res.status(404).json({ status: 404, message: 'No se pudo actualizar la información' });
      }
    } catch (error) {
      res.status(500).json({ status: 500, message: 'Error en el sistema: ' + error });
    }
  };
  
  export const buscar = async (req, res) => {
    try {
        const { id_recursos } = req.params;
        const [resultado] = await pool.query("SELECT * FROM recursos WHERE id_recursos=?", [id_recursos]);

        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(404).json({
                mensaje: "No se encontró un recurso con ese ID"
            });
        }
    } catch (error) {
        res.status(500).json({ status: 500, message: 'Error en el sistema: ' + error });
    }
};
