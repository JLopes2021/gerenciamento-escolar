import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import Calendario from './components/layout/Calendar';
import Notificacao from './components/layout/Notifications';
import Estatisticas from './components/layout/Statistics';

function App() {
  return (
    <div className="App">
      
      <Navbar/>
      <div>
      <h1>Funciona</h1>
      <Calendario/>
      <Notificacao/>
      <Estatisticas/>
      </div>
    </div>
  );
}

export default App;
