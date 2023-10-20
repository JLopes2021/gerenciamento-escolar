import React, { useState } from 'react';
import './Spa.css';

function Notifications() {
  const [notifications, setNotifications] = useState([
    { id: 1, message: 'Lembrete: Reunião de Pais e Mestres amanhã às 18h.', read: false },
    { id: 2, message: 'Nova mensagem de João Silva: "Preciso de ajuda com Matemática."', read: false },
    // Adicione mais notificações conforme necessário
  ]);

  const [lastUpdated, setLastUpdated] = useState(new Date());

  const markAsRead = (id) => {
    const updatedNotifications = notifications.map(notification =>
      notification.id === id ? { ...notification, read: true } : notification
    );
    setNotifications(updatedNotifications);
  };

  const deleteNotification = (id) => {
    const updatedNotifications = notifications.filter(notification => notification.id !== id);
    setNotifications(updatedNotifications);
    setLastUpdated(new Date());
  };

  const handleRefresh = () => {
    // Atualize as notificações com base na última vez que a lista foi atualizada
    console.log('Lista de notificações atualizada.');
    setLastUpdated(new Date());
  };

  return (
    <div className="Notifications">
      <h2>Notificações</h2>

      {/* Botão de Atualizar */}
      <button onClick={handleRefresh}>
        Atualizar
      </button>

      {/* Lista de Notificações */}
      <ul>
        {notifications.map(notification => (
          <li key={notification.id} className={notification.read ? 'read' : 'unread'}>
            {notification.message}
            {!notification.read && (
              <button onClick={() => markAsRead(notification.id)}>Marcar como Lida</button>
            )}
            <button onClick={() => deleteNotification(notification.id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Notifications;
