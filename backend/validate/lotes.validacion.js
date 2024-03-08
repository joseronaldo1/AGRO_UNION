import { check } from "express-validator"


export const validarlotes=[

    /// me esta validando mal el tema del nombre porfabor corregir 

	/**
	 porfavor crrglar bien la validacion 


	 "errors": {
		"errors": [
			{
				"type": "field",
				"msg": "es obligatorio",
				"path": "nombres",
				"location": "body"
			}
	 */
            
check('nombres','es obligatorio').not().isEmpty().isLength({max:100}),
check('fk_id_finca','es obligartorio').not().isEmpty(),
check('fk_id_produccion','es obligartorio').not().isEmpty(),
check('fk_id_variedad','es obligartorio').not().isEmpty(),
check('estado','es obligartorio').not().isEmpty(),
]