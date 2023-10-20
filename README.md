# Gerenciamento Escolar

Um sistema de gerenciamento escolar desenvolvido em React.js.

## Capturas de Tela

![Tela Inicial](image.png)
### Função Calendar
## Funções do Componente `Calendar`

1. **`useState`**:
   - O `useState` é um Hook do React que permite adicionar estado a um componente funcional. Ele retorna um par de valores: o estado atual e uma função que permite atualizá-lo. 
   - Exemplo:
     ```jsx
     const [selectedDate, setSelectedDate] = useState(null);
     const [currentMonth, setCurrentMonth] = useState(new Date());
     ```

2. **`events`**:
   - É um array de objetos que representam os eventos. Cada objeto possui três propriedades: `date`, `description` e `details`.
   - Exemplo:
     ```jsx
     const events = [
       { date: '2023-10-25', description: 'Reunião de Pais e Mestres - Outubro', details: 'Local: Sala de Conferências' },
       // ...
     ];
     ```

3. **`handleEventClick`**:
   - Esta função é chamada quando um evento na lista é clicado. Ela recebe a data do evento como argumento e a define como a `selectedDate`.
   - Exemplo:
     ```jsx
     const handleEventClick = (date) => {
       setSelectedDate(date);
     };
     ```

4. **`handleNextMonth`** e **`handlePreviousMonth`**:
   - Estas são funções que permitem a navegação entre os meses. `handleNextMonth` avança para o próximo mês e `handlePreviousMonth` volta para o mês anterior.
   - Exemplo:
     ```jsx
     const handleNextMonth = () => {
       const nextMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1);
       setCurrentMonth(nextMonth);
     };

     const handlePreviousMonth = () => {
       const prevMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1);
       setCurrentMonth(prevMonth);
     };
     ```

5. **`getEventsForMonth`**:
   - Esta função retorna uma lista de eventos para o mês atual. Ela filtra os eventos com base na data.
   - Exemplo:
     ```jsx
     const getEventsForMonth = () => {
       const firstDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1);
       const lastDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0);

       return events.filter(event => {
         const eventDate = new Date(event.date);
         return eventDate >= firstDayOfMonth && eventDate <= lastDayOfMonth;
       });
     };
     ```
   - `getEventsForMonth` usa a data do estado `currentMonth` para filtrar os eventos e retornar apenas aqueles que estão dentro do intervalo do mês atual.


## Instalação

Para instalar e executar o projeto, siga estes passos:

```bash
npm install
npm start
