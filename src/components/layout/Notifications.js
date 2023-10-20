import React from 'react';
import './Spa.css';


function Notifications() {
  const notifications = [
    { id: 1, message: 'Lembrete: Reunião de Pais e Mestres amanhã às 18h.' },
    { id: 2, message: 'Nova mensagem de João Silva: "Preciso de ajuda com Matemática."' },
  ];

  return (
    <div className="Notifications">
      <h2>Notificações</h2>
      <ul>
        {notifications.map(notification => (
          <li key={notification.id}>{notification.message}</li>
        ))}
      </ul>
    </div>
  );
}

export default Notifications;
