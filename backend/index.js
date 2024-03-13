import express  from 'express' 
import  body_parser from 'body-parser'

import rutaProgramacion from './src/routes/routes.programacion.js';



const servidor = express()

servidor.use(body_parser.json())
servidor.use(body_parser.urlencoded({extended: false}))


servidor.set('view engine', 'ejs');
servidor.set('views','./views');

servidor.get('/document',(req,res)=>{
    res.render('documentProgramacion.ejs');
})


servidor.use(rutaProgramacion)


servidor.listen(3000, () =>{
    console.log("esta funcionando")
})