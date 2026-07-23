import type { Task } from '../../types/Task';
import styles from './styles.module.css';
import { TaskItem } from '../Taskitem';

type TaskListProps = {
  tasks: Task[];
};

export function TaskList({ tasks }: TaskListProps) {
  return (
    <div className={styles.taskList}>
      <ul>
        {tasks.map(task => (
          <TaskItem tasks={task} key={task.id} />
        ))}
      </ul>
    </div>
  );
}
