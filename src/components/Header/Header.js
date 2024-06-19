// Header.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logomio from '../../logmio.png'; // Ensure the path is correct
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is imported
import './Header.css'; // Import styles

function Header({ isAuthenticated, userEmail, onLogout }) {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate('/perfil');
  };

  return (
      <header className="header">
        <div className="top-nav d-flex justify-content-between align-items-center">
          <img src={logomio} alt="Logo" className="logo" />
          <nav>
            <ul className="nav-links list-unstyled d-flex m-0">
              <li className="mx-2">
                <Link to="/" className="btn btn-link text-dark nav-link">
                  Inicio
                </Link>
              </li>
              <li className="mx-2">
                <Link to="/formulario" className="btn btn-link text-dark nav-link">
                  Adopción
                </Link>
              </li>
              <li className="mx-2">
                <Link to="/contacto" className="btn btn-link text-dark nav-link">
                  Contacto
                </Link>
              </li>
            </ul>
          </nav>
          <div>
            {isAuthenticated ? (
                <div className="dropdown">
                  <button
                      className="btn btn-outline-black dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                  >
                    Hola {userEmail}!
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <li>
                      <button className="dropdown-item" onClick={handleProfileClick}>
                        Perfil
                      </button>
                    </li>
                    <li>
                      <button className="dropdown-item text-red" onClick={onLogout}>
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
            ) : (
                <Link to="/login" className="btn btn-outline-dark">
                  Iniciar Sesión
                </Link>
            )}
          </div>
        </div>
      </header>
  );
}

export default Header;
