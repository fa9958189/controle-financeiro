// Arquivo Rotas.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Logon from './pages/logon';
import Dashbord from './pages/dashboard';
import Listausuario from './pages/listarUsuario';
import CadastroUsuario from './pages/cadastroUsuario';
import Editarusuario from './pages/editarUsuario';
import CadastroUsuario1 from './pages/cadastroUsuario1';
import Listaestoque from './pages/listarEstoque';
import Listasaida from './pages/listarSaida';  
import Saidaproduto from './pages/saidaProduto';

export default function Rotas() {
   return (
       <BrowserRouter>
          <Routes>
             <Route path="/" element={<Logon />} />
             <Route path="/dashboard" element={<Dashbord />} />
             <Route path="/listausuario" element={<Listausuario />} />
             <Route path="/cadastrousuario" element={<CadastroUsuario />} />
             <Route path="/cadastrousuario1" element={<CadastroUsuario1 />} />
             <Route path="/editarusuario/:id" element={<Editarusuario />} />
             <Route path="/listaestoque" element={<Listaestoque />} />
             <Route path="/listarsaida" element={<Listasaida />} />
             <Route path="/saidaProduto" element={<Saidaproduto />} />
          </Routes>  
       </BrowserRouter>
   );
}
