import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import DadosP from './pages/DadosPessoais';
import Endereco from './pages/Endereco';
import Tipo from './pages/TipoConta';
import Verificacao from './pages/CodeVerificacao';
import Home from './pages/Home';
import Sidebar from './components/Sidebar';
import Inicio from './pages/Inicio';
import Cartoes from './pages/Cartoes';
import Carteira from './pages/Carteira';
import AddCartao from './pages/AddCartao';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>

          <Route path="/" element={<Login />} />
          <Route path="/Cadastro" element={<Cadastro />} />
          <Route path="/Cadastro/2" element={<DadosP />} />
          <Route path="/Cadastro/3" element={<Endereco />} />
          <Route path="/Cadastro/4" element={<Tipo />} />
          <Route path="/Cadastro/5" element={<Verificacao />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Inicio" element={<Inicio />} />
          <Route path="/Cartoes" element={<Cartoes />} />
          <Route path="/Carteira" element={<Carteira />} />
          <Route path="/AddCartao" element={<AddCartao />} />

        </Routes>
      </Router>
    </div>


  );
}

export default App;
