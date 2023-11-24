import React from 'react'
import { Link } from 'react-router-dom';
import './error404.css'

const Error404 = () => {
  return (
    <div className="ePage">
      <div className="eContent">
        <p className="eError">404</p>
        <h3 className="eTitle">Página no encontrada</h3>
        <p className="eNoFount">
          Lo sentimos, no pudimos encontrar la página que estás buscando.
        </p>
        <div className="eLink">
          <Link to="/">Regresar a página principal</Link>
        </div>
      </div>
    </div>
  );
}

export default Error404;

