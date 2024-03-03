import { check } from "express-validator";

// Registrar Asignación
export const asignacionC = [
    /* check('id_asignacion', 'El campo de clave foránea debe contener solo números').isNumeric(), */
    check('fk_id_usuario', 'El campo de clave foránea debe contener solo números').isNumeric(),
    check('fecha_inicio', 'La fecha de la asignacion debe ser YYYY-MM-DD, y no puede contener letras y barras').not().isEmpty().optional().isLength({ max: 20 }).matches(/^\d{4}-\d{2}-\d{2}$/),
    check('fecha_fin', 'La fecha de la asignacion debe ser YYYY-MM-DD, y no puede contener letras y barras').not().isEmpty().optional().isLength({ max: 20 }).matches(/^\d{4}-\d{2}-\d{2}$/)
];

// Actualizar Asignación
export const asignacionA = [
    check('fecha_inicio', 'La fecha de la asignacion debe ser YYYY-MM-DD, y no puede contener letras y barras').not().isEmpty().optional().isLength({ max: 20 }).matches(/^\d{4}-\d{2}-\d{2}$/),
    check('fecha_fin', 'La fecha de la asignacion debe ser YYYY-MM-DD, y no puede contener letras y barras').not().isEmpty().optional().isLength({ max: 20 }).matches(/^\d{4}-\d{2}-\d{2}$/)
];
