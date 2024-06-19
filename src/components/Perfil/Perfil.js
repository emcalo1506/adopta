
import React from 'react';



const Adopcion = ({ nombre, tipo }) => (
  <li>{`${nombre} (${tipo})`}</li>
);


const Perfil = ({ nombre, email, adopciones = [] }) => (

  <div style={{
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "20px",
    maxWidth: "400px",
    margin: "20px auto",
    backgroundColor: "#f9f9f9",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
  }}>
    <h2>Perfil de Usuario</h2>
    <p><strong>Email:</strong> {email}</p>
    <h3>Adopciones en Curso:</h3>
    {adopciones.length > 0 ? (
      <ul>
        {adopciones.map((adopcion, index) => (
          <Adopcion key={index} {...adopcion} />
        ))}
      </ul>
    ) : (
      <p>No tienes adopciones en curso.</p>
    )}
     
  </div>
  
);

export default Perfil;
