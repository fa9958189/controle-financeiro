import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Logon from './pages/logon';
import Dashbord from './pages/dashboard';
import ListarDizimista from './pages/listarDizimista';
import CadastroDizimista from './pages/cadastroDizimista';
import EditarDizimista from './pages/editarDizimista';
import CadastroDespesas from './pages/cadastroDespesas';
import ListarPorcentagem from './pages/listarPorcentagem';
import ListarDespesas from './pages/listarDespesas';
import SaidaProduto from './pages/saidaProduto';
import ListarDashboard from './pages/listarDashboard'; // Importação da página listarDashboard

export default function Rotas() {
   return (
       <BrowserRouter>
          <Routes>
             <Route path="/" element={<Logon />} />
             <Route path="/dashboard" element={<Dashbord />} />
             <Route path="/listardizimista" element={<ListarDizimista />} />
             <Route path="/cadastrodizimista" element={<CadastroDizimista />} />
             <Route path="/cadastrodespesas" element={<CadastroDespesas />} />
             <Route path="/editardizimista/:id" element={<EditarDizimista />} />
             <Route path="/listarporcentagem" element={<ListarPorcentagem />} />
             <Route path="/listardespesas" element={<ListarDespesas />} />
             <Route path="/saidaproduto" element={<SaidaProduto />} />
             <Route path="/listardashboard" element={<ListarDashboard />} /> // Adicionando a rota listarDashboard
          </Routes>  
       </BrowserRouter>
   );
}
