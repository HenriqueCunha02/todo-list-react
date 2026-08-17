import type { TaskModel } from '../../models/taskModel';
import { TaskActionTypes, type TaskActionModel } from './taskActions';

export function taskReducer(
  state: TaskModel,
  action: TaskActionModel,
): TaskModel {
  switch (action.type) {
    case TaskActionTypes.ADD_TASK: {
      return state;
    }

    case TaskActionTypes.DELETE_TASK: {
      return state;
    }

    case TaskActionTypes.FAVORITE_TASK: {
      return state;
    }

    case TaskActionTypes.CONCLUDE_TASK: {
      return state;
    }
  }
}
