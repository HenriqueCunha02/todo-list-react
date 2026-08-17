import type { TaskModel } from '../../models/taskModel';

export const initialTaskState: TaskModel = {
  id: 0,
  completed: false,
  favorite: false,
  title: '',
};
