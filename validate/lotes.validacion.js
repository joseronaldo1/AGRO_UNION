import { check } from "express-validator"


export const validarlotes=[
check('nombres','es obligatorio').not().isEmpty().isLength({max:100}),
check('fk_id_finca','es obligartorio').not().isEmpty(),
check('fk_id_produccion','es obligartorio').not().isEmpty(),
check('fk_id_variedad','es obligartorio').not().isEmpty(),
check('estado','es obligartorio').not().isEmpty(),
]