import { check } from "express-validator";

export const validarUsuario = 
    [
        check('nombres', 'El nombre es obligatorio maximo 50 caracteres')
        .not().isEmpty().isLength({max: 50}),

        check('correo', 'Correo invalido')
        .isEmail()
    ]