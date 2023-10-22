import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Calendario from './components/layout/Calendar';
import Notificacao from './components/layout/Notifications';
import Estatisticas from './components/layout/Statistics';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">

      <Navbar />
      <div>
        <h1>Funciona</h1>
        <div className='menu'>
          <div id="#section1">      <Calendario /></div>
          <div id="#section2">      <Notificacao />
          </div>
          <div id="#section3">      <Estatisticas />
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
