import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import AnimalList from './components/AnimalCard/AnimalList';
import 'bootstrap/dist/css/bootstrap.min.css';
import animales from './components/AnimalCard/data';
import Footer from './components/Footer';
import Header from './components/Header/Header';
import Carousel from './components/Carousel/Carousel';
import BarraBusqueda from './components/BarraBusqueda/BarraBusqueda';
import Formulario from './components/Formulario/Formulario';
import Contacto from './components/Contacto/Contacto';
import Login from './components/Login/Login';
import Perfil from './components/Perfil/Perfil';

import './App.css';

const userProfileData = {
  adopciones: [
    { nombre: "Peque", tipo: "Hamster" },
    { nombre: "Misi", tipo: "Gato" }
  ]
};

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();


  const handleLogin = (email) => {
    setIsAuthenticated(true);
    setUserEmail(email);
  };

  const handleLogout = () => {
    setLoading(true);
    setTimeout(() => {
      setIsAuthenticated(false);
      setUserEmail('');
      setLoading(false);
      navigate('/');
    }, 1000); // Simulate loading time
  };

  return (
      <div className="main-container">
        <Header isAuthenticated={isAuthenticated} userEmail={userEmail} onLogout={handleLogout} />
        {loading && <div className="loading">Loading...</div>}
        <Routes>
          <Route path="/" element={
            <>
              <Carousel />
              <BarraBusqueda />
              <AnimalList animales={animales} />
            </>
          } />
          <Route path="/formulario" element={<Formulario />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/perfil" element={
            <Perfil
              nombre={userProfileData.nombre}
              email={userEmail}
              adopciones={userProfileData.adopciones}
            />}
          />
        </Routes>
        <Footer />
      </div>
  );
}

export default App;
