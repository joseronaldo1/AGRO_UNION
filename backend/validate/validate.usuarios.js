import { check } from "express-validator";

export const validarUsuario = 
    [
        check('nombres', 'El nombre es obligatorio maximo 50 caracteres')
        .not().isEmpty().isLength({max: 50}),

        check('apellidos', 'El apellido es obligatorio maximo 50 caracteres')
        .not().isEmpty().isLength({max: 50}),

        check('rol', 'Rol no existe')
        .not().isEmpty().isIn(["administrador", "empleado"]),

        check('correo', 'Correo invalido')
        .isEmail().isEmpty()

    ]