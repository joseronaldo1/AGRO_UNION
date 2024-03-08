import { check } from "express-validator";

export const validacionRecursosR = [
    check('precio').notEmpty().withMessage('El precio es obligatorio').isNumeric().withMessage('El precio debe ser un número'),
    check('fk_id_tipo_recursos').notEmpty().withMessage('La fk es obligatoria').isNumeric().withMessage('La fk debe ser un número')
]

export const validacionRecursosA = [
    check('precio').notEmpty().withMessage('El precio es obligatorio').isNumeric().withMessage('El precio debe ser un número'),
    check('fk_id_tipo_recursos').notEmpty().withMessage('La fk es obligatoria').isNumeric().withMessage('La fk debe ser un número')
]