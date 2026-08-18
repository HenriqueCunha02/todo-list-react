import type { TaskModel } from '../../models/taskModel';

export const initialTaskState: TaskModel[] = (() => {
  const storedTasks = localStorage.getItem('@todo:tasks');

  if (storedTasks) {
    return JSON.parse(storedTasks);
  }

  return [];
})();
