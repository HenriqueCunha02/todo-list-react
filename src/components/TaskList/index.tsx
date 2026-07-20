import styles from './styles.module.css';

export function TaskList() {
  return (
    <div className={styles.taskList}>
      <ul>
        <li>
          <input type='checkbox' />
          Teste
        </li>
        <li>
          <input type='checkbox' />
          Estudar
        </li>
        <li>
          <input type='checkbox' />
          Comprar Racao
        </li>
        <li>
          <input type='checkbox' />
          Teste
        </li>
        <li>
          <input type='checkbox' />
          Estudar
        </li>
        <li>
          <input type='checkbox' />
          Comprar Racao
        </li>
        <li>
          <input type='checkbox' />
          Teste
        </li>
        <li>
          <input type='checkbox' />
          Estudar
        </li>
        <li>
          <input type='checkbox' />
          Comprar Racao
        </li>
      </ul>
    </div>
  );
}
