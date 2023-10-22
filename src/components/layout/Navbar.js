import React from 'react';

function AppNavbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#home">Meu Aplicativo</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#section1">Seção 1</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#section2">Seção 2</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#section3">Seção 3</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default AppNavbar;
