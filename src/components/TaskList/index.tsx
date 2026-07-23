import { StarIcon, TrashIcon } from 'lucide-react';
import styles from './styles.module.css';
import type { Task } from '../../types/Task';

type TaskListProps = {
  tasks: Task[];
};

export function TaskList({ tasks }: TaskListProps) {
  console.log(tasks);

  return (
    <div className={styles.taskList}>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <input type='checkbox' />
            {task.title}
            <div className={styles.icon}>
              <StarIcon fill='#ffc800' strokeWidth={0.3} />
              <TrashIcon strokeWidth={0.3} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
