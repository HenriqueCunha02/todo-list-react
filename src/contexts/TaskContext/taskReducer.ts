import type { TaskModel } from '../../models/taskModel';
import { TaskActionTypes, type TaskActionModel } from './taskActions';

export function taskReducer(
  state: TaskModel[],
  action: TaskActionModel,
): TaskModel[] {
  switch (action.type) {
    case TaskActionTypes.ADD_TASK: {
      return [...state, action.payload];
    }

    case TaskActionTypes.DELETE_TASK: {
      return state.filter(task => task.id !== action.payload);
    }

    case TaskActionTypes.FAVORITE_TASK: {
      return state.map(task =>
        task.id === action.payload
          ? {
              ...task,
              favorite: !task.favorite,
            }
          : task,
      );
    }

    case TaskActionTypes.CONCLUDE_TASK: {
      return state.map(task =>
        task.id === action.payload
          ? {
              ...task,
              completed: !task.completed,
            }
          : task,
      );
    }

    case TaskActionTypes.DELETE_ALL_CONCLUDE: {
      return state.filter(task => !task.completed);
    }

    default:
      return state;
  }
}
