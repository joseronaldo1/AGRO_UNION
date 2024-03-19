import { check } from "express-validator";


export const ValidateCostos=[
    check('fk_id_lotes','campos obligatorios y solo recibe numeros').not().isEmpty().isInt().isNumeric(),
    check('fk_id_recursos','campos obligatorios ys solo recibe numeros').not().isEmpty().isInt().isNumeric(),
    check('egresos','campos obligatorios').not().isEmpty().isFloat()

]


export const actualizar =[
    check('fk_id_lotes','se requiere el id del lote y solo recibe numeros').optional().isInt().isNumeric(),
    check('fk_id_recursos','ingrese el id de algun recurso y solo recibe numeros').optional().isInt().isNumeric(),
    check('egresos', 'solo recibe numeros').optional().notEmpty().isFloat()
]