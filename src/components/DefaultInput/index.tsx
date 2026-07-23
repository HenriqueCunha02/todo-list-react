import { useState } from 'react';
import styles from './styles.module.css';

type DefaultInputProps = {
  addTask: (title: string) => void;
};

export function DefaultInput({ addTask }: DefaultInputProps) {
  const [task, setTask] = useState('');

  function handleCreateNewTask(event: React.FormEvent) {
    event.preventDefault();

    addTask(task);
  }

  return (
    <form className={styles.inputContainer} onSubmit={handleCreateNewTask}>
      <input
        value={task}
        onChange={e => setTask(e.target.value)}
        type='text'
        className={styles.defaultInput}
        placeholder='O que você precisa fazer?'
      />
      <button className={styles.inputButton}>Adicionar</button>
    </form>
  );
}
