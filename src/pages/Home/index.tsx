import { Container } from '../../components/Container';
import { Header } from '../../components/Header';
import { DefaultInput } from '../../components/DefaultInput';
import { NavFilters } from '../../components/NavFilters';
import { TaskList } from '../../components/TaskList';
import { Footer } from '../../components/Footer';
import type { Task } from '../../types/Task';

import { useState } from 'react';

export function Home() {
  const [task, setTask] = useState<Task[]>([]);

  function handleCreateNewTask(title: string) {
    const newTask: Task = {
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

  return (
    <Container>
      <Header />
      <DefaultInput addTask={handleCreateNewTask} />

      <NavFilters />
      <TaskList
        task={task}
        onToggleTask={handleToggleTask}
        onDeleteTask={handleDeleteTask}
      />

      <Footer />
    </Container>
  );
}
