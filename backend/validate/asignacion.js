import { check } from "express-validator";

// Registrar Asignación
export const asignacionC = [
    check('fk_id_usuario', 'El campo de clave foránea debe contener solo números naturales o el fk_id_usuario no existe').not().isEmpty().isInt().isNumeric(),
    check('fk_actividad', 'El campo de clave foránea debe contener solo números naturales o el fk_id_actividad no existe').not().isEmpty().isInt().isNumeric(),
    check('fecha_inicio', 'La fecha de la asignacion debe ser YYYY-MM-DD, y no puede contener letras y barras').not().isEmpty().isLength({ max: 20 }).matches(/^\d{4}-\d{2}-\d{2}$/),
    check('fecha_fin', 'La fecha de la asignacion debe ser YYYY-MM-DD, y no puede contener letras y barras').not().isEmpty().isLength({ max: 20 }).matches(/^\d{4}-\d{2}-\d{2}$/),
    check('estado', 'El estado es obligatorio.')
    .notEmpty()
    .isIn(['acabo', 'noacabo', 'proceso']).withMessage('El estado debe ser acabo no acabo o proceso.'),
];

// Actualizar Asignación
export const asignacionA = [
    check('fk_id_usuario', 'El campo de clave foránea debe contener solo números naturales o el fk_id_usuario no existe').isNumeric().optional(),
    check('fk_actividad', 'El campo de clave foránea debe contener solo números naturales o el fk_id_actividad no existe').isNumeric().optional(),
    check('fecha_inicio', 'La fecha de la asignacion debe ser YYYY-MM-DD, y no puede contener letras y barras').not().isEmpty().optional().isLength({ max: 20 }).matches(/^\d{4}-\d{2}-\d{2}$/),
    check('fecha_fin', 'La fecha de la asignacion debe ser YYYY-MM-DD, y no puede contener letras y barras').not().isEmpty().optional().isLength({ max: 20 }).matches(/^\d{4}-\d{2}-\d{2}$/),
    check('estado', 'El estado es obligatorio y solo puede ser "acabo", "noacabo", o "proceso"').isIn(['acabo', 'noacabo', 'proceso']).optional()
];
