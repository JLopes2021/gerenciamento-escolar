import React from 'react';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import dados from './DadosTurmas'; // Importe o array de dados
import styles from './Turmas.module.css';

function DefaultExample() {
  return (
    <ListGroup className={styles.turmasList}> 
      {dados.map((item, index) => (
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
    </ListGroup>
  );
}

export default DefaultExample;
