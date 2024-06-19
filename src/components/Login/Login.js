import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Inicio de sesión exitoso');
    onLogin(email); 
    navigate('/perfil');  
  };

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <div className="login-container mt-5">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit} className="w-100">
        <div className="login-form-group mb-3">
          <label htmlFor="email">Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="login-form-control"
            required
          />
        </div>
        <div className="login-form-group mb-3">
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-form-control"
            required
          />
        </div>
        <div className="login-form-group d-grid gap-2">
          <button type="submit" className="btn btn-primary">Iniciar Sesión</button>
          <button type="button" className="btn btn-secondary" onClick={handleBackClick}>Atrás</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
