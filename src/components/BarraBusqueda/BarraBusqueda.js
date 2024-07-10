import React, { useState } from 'react';
import './BarraBusqueda.css'; 

function SearchBar() {
  const [typeFilter, setTypeFilter] = useState('all');
  const [breedFilter, setBreedFilter] = useState('all');
  const [ageFilter, setAgeFilter] = useState('all');
  const [communityFilter, setCommunityFilter] = useState('all');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Filtros seleccionados:', { typeFilter, breedFilter, ageFilter, communityFilter });
  };

  return (
    <div className="search-bar-wrapper">
      <div className="container-fluid d-flex align-items-center">
        <div className="row w-100">
          <div className="col-md-6">
            <div className="text-container">
              <h1 className="custom-title">Encuentra tu Compañero Ideal</h1>
              <p>Explora nuestras opciones con filtros avanzados y descubre a tu perfecto compañero de cuatro patas. 
              Nuestra plataforma te permite buscar por tipo, raza, edad y características específicas para asegurarte de que encuentres al amigo ideal que complemente tu estilo de vida.</p>
            </div>
          </div>
          <div className="col-md-5">
            <form onSubmit={handleSubmit} className="search-form">
              <select className="form-select" value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)}>
                <option value="all">Tipo</option>
                <option value="perro">Perro</option>
                <option value="gato">Gato</option>
                <option value="otro">Otro</option>
              </select>
              <select className="form-select" value={breedFilter} onChange={(e) => setBreedFilter(e.target.value)}>
                <option value="all">Raza</option>
                <option value="labrador">Labrador</option>
                <option value="golden">Golden</option>
                <option value="bulldog">Bulldog</option>
                <option value="beagle">Beagle</option>
                <option value="otro">Otro</option>
              </select>
              <select className="form-select" value={ageFilter} onChange={(e) => setAgeFilter(e.target.value)}>
                <option value="all">Edad</option>
                <option value="0-2">De 0 a 2</option>
                <option value="2-6">De 2 a 6</option>
                <option value="6-9">De 6 a 9</option>
                <option value="9-12">De 9 a 12</option>
                <option value="mas-12">Más de 12</option>
              </select>
              <select className="form-select" value={communityFilter} onChange={(e) => setCommunityFilter(e.target.value)}>
                <option value="all">Comunidad</option>
                <option value="andalucia">Andalucía</option>
                <option value="aragon">Aragón</option>
                <option value="asturias">Asturias</option>
                <option value="islas-baleares">Islas Baleares</option>
                <option value="canarias">Canarias</option>
                <option value="cantabria">Cantabria</option>
                <option value="castilla-y-leon">Castilla y León</option>
                <option value="castilla-la-mancha">Castilla-La Mancha</option>
                <option value="comunidad-valenciana">Comunidad Valenciana</option>
                <option value="extremadura">Extremadura</option>
                <option value="galicia">Galicia</option>
                <option value="la-rioja">La Rioja</option>
                <option value="madrid">Madrid</option>
                <option value="murcia">Murcia</option>
                <option value="navarra">Navarra</option>
                <option value="pais-vasco">País Vasco</option>
                <option value="ceuta">Ceuta</option>
                <option value="melilla">Melilla</option>
              </select>
              <button type="submit" className="btn btn-primary">Buscar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
