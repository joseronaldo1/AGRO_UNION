import { check } from "express-validator";

//REGISTRAR
export const validarTrr = [
    check('nombre_recursos', 'El nombre del recurso es obligatorio y debe tener máximo 25 caracteres, y seguir el formato especificado').not().isEmpty().isLength({ max: 25 }).matches(/^[a-zA-Z\s]{3,}[a-zA-Z\s\d]{0,3}$/),
    check('cantidad_medida', 'La cantidad medida debe ser un número decimal').optional().isDecimal(),
    check('unidades_medidas', 'Las unidades de medida son obligatorias y deben ser: "kg","g" o "ml","litro"').not().isEmpty().isIn(['kg', 'g', 'ml', 'litro']).optional(),
    check('extras', 'El campo de extras debe ser una cadena de texto').optional().isString().trim()
];


//ACTUALIZAR
export const validarTra = [

        check('nombre_recursos', 'El nombre del recurso debe tener máximo 25 caracteres, y seguir el formato especificado').not().optional().isEmpty().isLength({ max: 25 }).matches(/^[a-zA-Z\s]{3,}[a-zA-Z\s\d]{0,3}$/),
        check('cantidad_medida', 'La cantidad medida debe ser un número decimal').optional().isDecimal(),
        check('unidades_medidas', 'Las unidades deben ser "kg","g" o "ml","litro"').optional().isIn(['kg', 'g', 'ml', 'litro'])
    ];
    