import { check } from "express-validator"


export const validarlotes=[

check('nombres','es obligatorio').isEmpty().isLength({max:100}),
check('longitud','es obligatorio') .isFloat({ min: -180, max: 180 }),
check('latitud','es obligatorio') .isFloat({ min: -80, max: 90 }),
check('fk_id_finca','es obligartorio el kf_finca') .isInt(),
check('fk_id_produccion','es obligartorio el fk_produccion').isInt(),
check('fk_id_variedad','es obligartorio el fk_variedad').isInt(),
check('estado', 'El estado es obligatorio.')
    .notEmpty()
    .isIn(['activo', 'inactivo']).withMessage('El estado debe ser activo o inactivo.'),]

export const validarlotesactualizar=[
            
    check('nombres','es obligatorio').isEmpty().isLength({max:100}) .optional(),
    check('longitud','es obligatorio') .isFloat({ min: -180, max: 180 }) .optional(),
    check('latitud','es obligatorio') .isFloat({ min: -80, max: 90 }) .optional(),
    check('fk_id_finca','es obligartorio el kf_finca') .optional(),
    check('fk_id_produccion','es obligartorio el fk_produccion') .optional(),
    check('fk_id_variedad','es obligartorio el fk_variedad') .optional(),
    check('estado', 'El estado es obligatorio.')
    .notEmpty()
    .isIn(['activo', 'inactivo']).withMessage('El estado debe ser activo o inactivo.') .optional(),
    ]
    