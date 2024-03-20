import { BrowserRouter, Route, Routes } from "react-router-dom"
import {Login } from './pages/Login.jsx'
import {Iniciof } from './pages/Iniciof.jsx'
import {Registro} from './pages/Registro.jsx'
import {Olvidopassone } from './pages/Olvidopassone.jsx'
import {Olvidopsstwo } from './pages/olvidopsstwo.jsx'
import { Olvidopasstree } from "./pages/Olvidopasstree.jsx"
import {Usuario} from './pages/Usuarios.jsx'




function App() {

  return (
    <BrowserRouter>    
    {/*   <Sidebar /> */}
        <Routes>
          <Route path="/" element={<Iniciof />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/olvidoone" element={<Olvidopassone />} />
          <Route path="/olvidotwo" element={<Olvidopsstwo />} />
          <Route path="/olvidotree" element={<Olvidopasstree />} />
          <Route path="/usuario" element={<Usuario />} />
          
        </Routes>

    </BrowserRouter>
  )
}

export default App;
