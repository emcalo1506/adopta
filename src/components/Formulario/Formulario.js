import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Formulario.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Formulario() {
  const navigate = useNavigate();
  const [nombre, setNombre] = useState('');
  const [direccion, setDireccion] = useState('');
  const [perro, setPerro] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [telefono, setTelefono] = useState('');

  const handleBackClick = () => {
    navigate('/');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ nombre, direccion, perro, descripcion, telefono });
    alert('Formulario enviado con éxito');
  };

  return (
    <div className="form-wrapper container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="form-container mt-4">
            <h2 className="text-center">Formulario de Adopción</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-3">
                <label htmlFor="nombre">Nombre:</label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  className="form-control"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  required
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="direccion">Dirección:</label>
                <input
                  type="text"
                  id="direccion"
                  name="direccion"
                  className="form-control"
                  value={direccion}
                  onChange={(e) => setDireccion(e.target.value)}
                  required
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="perro">Perro que quieres adoptar:</label>
                <input
                  type="text"
                  id="perro"
                  name="perro"
                  className="form-control"
                  value={perro}
                  onChange={(e) => setPerro(e.target.value)}
                  required
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="descripcion">Descripción de por qué quieres adoptar:</label>
                <textarea
                  id="descripcion"
                  name="descripcion"
                  className="form-control"
                  value={descripcion}
                  onChange={(e) => setDescripcion(e.target.value)}
                  required
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="telefono">Teléfono de contacto:</label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  className="form-control"
                  pattern="[0-9]{10}"
                  title="Debe contener 10 dígitos"
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value)}
                  required
                />
              </div>
              <div className="d-grid gap-2">
                <button type="submit" className="btn btn-primary">Enviar</button>
                <button type="button" className="btn btn-secondary" onClick={handleBackClick}>Atrás</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Formulario;
