// Arquivo Rotas.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Logon from './pages/logon';
import Dashbord from './pages/dashboard';
import ListarDizimista from './pages/listarDizimista';
import CadastroDizimista from './pages/cadastroDizimista';
import EditarDizimista from './pages/editarDizimista';
import CadastroUsuario1 from './pages/cadastroUsuario1';
import ListarPorcentagem from './pages/listarPorcentagem';
import ListaDespesas from './pages/listarDespesas'; // Alteração aqui
import SaidaProduto from './pages/saidaProduto';

export default function Rotas() {
   return (
       <BrowserRouter>
          <Routes>
             <Route path="/" element={<Logon />} />
             <Route path="/dashboard" element={<Dashbord />} />
             <Route path="/listardizimista" element={<ListarDizimista />} />
             <Route path="/cadastrodizimista" element={<CadastroDizimista />} />
             <Route path="/cadastrousuario1" element={<CadastroUsuario1 />} />
             <Route path="/editardizimista/:id" element={<EditarDizimista />} />
             <Route path="/listarporcentagem" element={<ListarPorcentagem />} />
             <Route path="/listardespesas" element={<ListaDespesas />} /> // Alteração aqui
             <Route path="/saidaproduto" element={<SaidaProduto />} />
          </Routes>  
       </BrowserRouter>
   );
}
