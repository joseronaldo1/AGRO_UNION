
import express  from 'express' 
import  body_parser from 'body-parser'
import routeUsuarios from './src/routes/routes.usuarios.js'
import rutaValidacion from './src/routes/route.autenticacion.js'
const servidor = express()

servidor.use(body_parser.json())
servidor.use(body_parser.urlencoded({extended: false}))

servidor.set('view engine', 'ejs');
servidor.set('views','./views');

servidor.get('/document',(req,res)=>{
    res.render('document.ejs');
})

servidor.use('/usuarios', routeUsuarios)
servidor.use(rutaValidacion)

servidor.listen(3000, () =>{
    console.log("esta funcionando")
})