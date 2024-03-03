import { check } from "express-validator";


export const ValidateProduccion=[
    check('cantidad_produccion','la cantidad tienen que ser un numero y no ser menos a 1').isInt().isNumeric(),
    check('precio','el precio deve ser un numero y mayor a 1').isInt().isNumeric(),
    check('fk_variedad_cultivo','este deve un numero ').isNumeric().isEmpty()
]


export const actualizar =[
    check('cantidad_produccion','la cantidad tienen que ser un numero y no ser menos a 1').isInt().isNumeric(),
    check('precio','el precio deve ser un numero y mayor a 1').isInt().isNumeric(),
    check('fk_variedad_cultivo','este deve un numero ').isNumeric().isEmpty()
]