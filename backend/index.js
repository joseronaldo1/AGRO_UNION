import express  from 'express' 
import  body_parser from 'body-parser'
import routeUsuarios from './src/routes/routes.usuarios.js'
import rutaValidacion from './src/routes/route.autenticacion.js'
import costos from './src/routes/costos.routes.js';
import rutaFinca from './src/routes/Finca.routes.js';
import rutalote from './src/routes/lotes.routes.js';
import rutaAsignacion from './src/routes/routes.asignacion.js';
import rutaRecursos from './src/routes/routes.Recursos.js';
import { rutaDeTipoRecurso } from './src/routes/TipoRecurso.route.js';

const servidor = express()

servidor.use(body_parser.json())
servidor.use(body_parser.urlencoded({extended: false}))


servidor.set('view engine', 'ejs');
servidor.set('views','./views');

servidor.get('/document',(req,res)=>{
    res.render('documentdevjrl.ejs');
})

servidor.use('/usuarios', routeUsuarios)
servidor.use(rutaValidacion)
servidor.use(costos)
servidor.use(rutaFinca)
servidor.use(rutalote)
servidor.use(rutaAsignacion)
servidor.use(rutaRecursos)
servidor.use(rutaDeTipoRecurso)
servidor.use(rutaDeActividad)
servidor.listen(3000, () =>{
    console.log("esta funcionando")
})