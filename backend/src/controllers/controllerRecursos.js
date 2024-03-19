
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

    // Verificar si el fk_id_lotes existe
    const [recursosExist] = await pool.query('SELECT * FROM recursos WHERE id_recursos = ?', [fk_id_tipo_recursos]);

    if (recursosExist.length === 0) {
        return res.status(404).json({
            status: 404,
            message: 'El recurso no existe. Registre primero un recurso.'
        });
        }
  
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
      const { id_recursos } = req.params;
      const { precio, fk_id_tipo_recursos } = req.body;
      const errors = validationResult(req);
  
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      if (!precio && !fk_id_tipo_recursos) {
        return res.status(400).json({
            message: 'se requiere uno de los campos para actualizar (precio, fk_id_tipo_recursos)'
        });
    }
  
      // Verificar si el fk_id_lotes existe
      if (fk_id_tipo_recursos) {
        const [recursoExist] = await pool.query('SELECT * FROM recursos WHERE id_recursos = ?', [fk_id_tipo_recursos]);
  
        if (recursoExist.length === 0) {
          return res.status(404).json({
            status: 404,
            message: 'El recurso no existe. Registre primero un lote.'
          });
        }
      }
  
      const [oldrecursos] = await pool.query("SELECT * FROM recursos WHERE id_recursos = ?", [id_recursos]);
      const [result] = await pool.query(
        `UPDATE recursos SET precio = ?, fk_id_tipo_recursos = ? WHERE id_recursos = ?`,
        [precio ? precio : oldrecursos[0].precio, fk_id_tipo_recursos ? fk_id_tipo_recursos : oldrecursos[0].fk_id_tipo_recursos, id_recursos]
      );
  
      console.log(result)
      console.log(oldrecursos)
  
      if (result.affectedRows > 0) {
        res.status(200).json({
          status: 200,
          mensaje: "El recurso ha sido actualizado."
        });
      } else {
        res.status  (404).json({
          status: 404,
          mensaje: "No se pudo actualizar el recurso, inténtalo de nuevo."
        });
      }
    } catch (error) {
      res.status(500).json({
        status: 500,
        message: error.message
      });
      console.log(error);
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
