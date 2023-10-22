import React, { useState } from 'react';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import dados from './DadosTurmas'; // Importe o array de dados
import styles from './Turmas.module.css';

function DefaultExample() {
  const [showMore, setShowMore] = useState(false);
  const [showLess, setShowLess] = useState(false); // Adicionado estado para "Mostrar Menos"
  const maxItems = 4;

  const handleShowMore = () => {
    setShowMore(true);
    setShowLess(true); // Agora que estamos mostrando mais, podemos mostrar menos
  }

  const handleShowLess = () => {
    setShowMore(false);
    setShowLess(false); // Esconde o botão de "Mostrar Menos"
  }

  return (
    <div className={styles.container}>
      <ListGroup className={styles.turmasList}> 
        {dados.slice(0, showMore ? dados.length : maxItems).map((item, index) => (
          <ListGroup.Item
            key={index}
            as="li"
            className={`d-flex justify-content-between align-items-start ${styles.turmasItem}`}
          >
            <div className={`ms-2 me-auto ${styles.turmasContent}`}>
              <div className={`fw-bold ${styles.subheading}`}>{item.turma}</div>
              {item.descricao}
              <div>
                {item.professor}
              </div>
            </div>
            <Badge bg="primary" pill>
              <p>Quantidade de alunos: {item.alunos}</p>
            </Badge>
          </ListGroup.Item>
        ))}
        {!showMore && dados.length > maxItems && (
          <button onClick={handleShowMore} className={styles.showMoreButton}>
            Mostrar Mais
          </button>
        )}
        {showLess && (
          <button onClick={handleShowLess} className={styles.showMoreButton}>
            Mostrar Menos
          </button>
        )}
      </ListGroup>
    </div>
  );
}

export default DefaultExample;
