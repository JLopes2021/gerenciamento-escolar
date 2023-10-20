import React, { useState } from 'react';
import './Spa.css';

function Calendar() {
  // Estado para a data selecionada
  const [selectedDate, setSelectedDate] = useState(null);

  // Estado para o mês atual
  const [currentMonth, setCurrentMonth] = useState(new Date());

  // Eventos (que deveriam vir do banco de dados)
  const events = [
    { date: '2023-10-25', description: 'Reunião de Pais e Mestres - Outubro', details: 'Local: Sala de Conferências' },
    { date: '2023-11-02', description: 'Prova de Matemática - Novembro', details: 'Horário: 9:00 - 10:30' },
    { date: '2023-11-10', description: 'Feriado - Dia da República - Novembro', details: 'Feriado Nacional' },
    { date: '2023-12-05', description: 'Exame de História - Dezembro', details: 'Sala: 203' },
    { date: '2023-12-15', description: 'Festa de Fim de Ano - Dezembro', details: 'Local: Ginásio Esportivo' },
    { date: '2024-01-10', description: 'Aula Inaugural - Janeiro', details: 'Início do Novo Período Letivo' },
  ];

  // Função para lidar com o clique em um evento
  const handleEventClick = (date) => {
    setSelectedDate(date);
  };

  // Função para avançar para o próximo mês
  const handleNextMonth = () => {
    const nextMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1);
    setCurrentMonth(nextMonth);
  };

  // Função para voltar para o mês anterior
  const handlePreviousMonth = () => {
    const prevMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1);
    setCurrentMonth(prevMonth);
  };

  // Função para obter os eventos para o mês atual
  const getEventsForMonth = () => {
    const firstDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1);
    const lastDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0);

    return events.filter(event => {
      const eventDate = new Date(event.date);
      return eventDate >= firstDayOfMonth && eventDate <= lastDayOfMonth;
    });
  };

  return (
    <div className="Calendar">
      <h2>Calendário Escolar</h2>

      {/* Navegação do calendário */}
      <div className="CalendarNavigation">
        <button onClick={handlePreviousMonth}>Mês Anterior</button>
        <span>{currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}</span>
        <button onClick={handleNextMonth}>Próximo Mês</button>
      </div>

      {/* Lista de eventos */}
      <ul>
        {getEventsForMonth().length > 0 ? (
          getEventsForMonth().map(event => (
            <li key={event.date} onClick={() => handleEventClick(event.date)}>
              <strong>{event.date}</strong>: {event.description}
              <p>{event.details}</p>
            </li>
          ))
        ) : (
          <li>Em branco</li>
        )}
      </ul>

      {/* Detalhes do evento selecionado */}
      {selectedDate && (
        <div className="EventDetails">
          <h3>Detalhes do Evento</h3>
          <p>Data: {selectedDate}</p>
          {getEventsForMonth().map(event => (
            event.date === selectedDate && <div key={event.date}>{event.details}</div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Calendar;
