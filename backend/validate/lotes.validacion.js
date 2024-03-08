import { check } from "express-validator"


export const validarlotes=[
            
check('nombres','es obligatorio').isEmpty().isLength({max:100}),
check('longitud','es obligatorio') .isFloat({ min: -180, max: 180 }),
check('latitud','es obligatorio') .isFloat({ min: -80, max: 90 }),
check('fk_id_finca','es obligartorio el kf_finca').isEmpty(),
check('fk_id_produccion','es obligartorio el fk_produccion').isEmpty(),
check('fk_id_variedad','es obligartorio el fk_variedad').isEmpty(),
check('estado','es obligartorio el estado').isEmpty(),
]

export const validarlotesactualizar=[
            
    check('nombres','es obligatorio').isEmpty().isLength({max:100}),
    check('longitud','es obligatorio') .isFloat({ min: -180, max: 180 }),
    check('latitud','es obligatorio') .isFloat({ min: -80, max: 90 }),
    check('fk_id_finca','es obligartorio el kf_finca').isEmpty(),
    check('fk_id_produccion','es obligartorio el fk_produccion').isEmpty(),
    check('fk_id_variedad','es obligartorio el fk_variedad').isEmpty(),
    check('estado','es obligartorio el estado').isEmpty(),
    ]

