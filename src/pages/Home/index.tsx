import { Container } from '../../components/Container';
import { Header } from '../../components/Header';
import { DefaultInput } from '../../components/DefaultInput';
import { NavFilters } from '../../components/NavFilters';
import { TaskList } from '../../components/TaskList';
import { Footer } from '../../components/Footer';
import type { TaskModel } from '../../models/taskModel';

import { useEffect, useState } from 'react';

export function Home() {
  type Filter = 'all' | 'pending' | 'completed' | 'favorite';
  type Theme = boolean;

  const [filter, setFilter] = useState<Filter>('all');
  const [theme, setTheme] = useState<Theme>(true);
  const [task, setTask] = useState<TaskModel[]>(() => {
    const storedTasks = localStorage.getItem('@todo:tasks');

    if (storedTasks) {
      return JSON.parse(storedTasks);
    }

    return [];
  });

  useEffect(() => {
    localStorage.setItem('@todo:tasks', JSON.stringify(task));
  }, [task]);

  function handleCreateNewTask(title: string) {
    const newTask: TaskModel = {
      id: Date.now(),
      title,
      completed: false,
      favorite: false,
    };

    setTask(prevState => [...prevState, newTask]);
  }

  function handleToggleTask(id: number) {
    setTask(prev =>
      prev.map(task =>
        task.id === id
          ? {
              ...task,
              completed: !task.completed,
            }
          : task,
      ),
    );
  }

  function handleDeleteTask(id: number) {
    setTask(prev => prev.filter(task => id !== task.id));
  }

  function handleFavoriteTask(id: number) {
    setTask(prev =>
      prev.map(task =>
        task.id === id
          ? {
              ...task,
              favorite: !task.favorite,
            }
          : task,
      ),
    );
  }

  function handleTheme() {
    document.documentElement.classList.toggle('dark');
    setTheme(prev => !prev);
  }

  function onDeleteAllTasks() {
    setTask(prev => prev.filter(task => !task.completed));
  }

  const filteredTasks = task.filter(task => {
    if (filter === 'favorite') {
      return task.favorite;
    }

    if (filter === 'pending') {
      return !task.completed;
    }

    if (filter === 'completed') {
      return task.completed;
    }

    return true;
  });

  return (
    <Container>
      <Header theme={theme} handleTheme={handleTheme} />
      <DefaultInput addTask={handleCreateNewTask} />

      <NavFilters setfilter={setFilter} filter={filter} />
      <TaskList
        theme={theme}
        task={filteredTasks}
        onToggleTask={handleToggleTask}
        onDeleteTask={handleDeleteTask}
        onFavoriteTask={handleFavoriteTask}
      />

      <Footer tasks={task} onDeleteAllTasks={onDeleteAllTasks} />
    </Container>
  );
}
