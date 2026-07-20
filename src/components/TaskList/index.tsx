import { StarIcon, TrashIcon } from 'lucide-react';
import styles from './styles.module.css';

export function TaskList() {
  return (
    <div className={styles.taskList}>
      <ul>
        <li>
          <input type='checkbox' />
          Ler 20 paginas
          <div className={styles.icon}>
            <StarIcon fill='#ffc800' strokeWidth={0.3} />
            <TrashIcon strokeWidth={0.3} />
          </div>
        </li>
        <li>
          <input type='checkbox' />
          Estudar React
          <div className={styles.icon}>
            <StarIcon strokeWidth={0.3} />
            <TrashIcon strokeWidth={0.3} />
          </div>
        </li>
        <li>
          <input type='checkbox' />
          Fazer exercicos
          <div className={styles.icon}>
            <StarIcon strokeWidth={0.3} />
            <TrashIcon strokeWidth={0.3} />
          </div>
        </li>
        <li>
          <input type='checkbox' />
          Limpar quarto
          <div className={styles.icon}>
            <StarIcon strokeWidth={0.3} />
            <TrashIcon strokeWidth={0.3} />
          </div>
        </li>
        <li>
          <input type='checkbox' />
          Assistar aula de Node.js
          <div className={styles.icon}>
            <StarIcon strokeWidth={0.3} />
            <TrashIcon strokeWidth={0.3} />
          </div>
        </li>
        <li>
          <input type='checkbox' />
          Comprar Racao
          <div className={styles.icon}>
            <StarIcon strokeWidth={0.3} />
            <TrashIcon strokeWidth={0.3} />
          </div>
        </li>
      </ul>
    </div>
  );
}
