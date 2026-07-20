import styles from './styles.module.css';

export function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <header className={styles.header}>
          Minhas Tarefas
          <span>Organize o que precisa ser feito</span>
        </header>
        <button className={styles.newTaskButton}> + Nova Tarefa</button>
      </div>
      <form className={styles.inputContainer}>
        <input
          type='text'
          className={styles.defaultInput}
          placeholder='O que você precisa fazer?'
        />
        <button className={styles.inputButton}>Adicionar</button>
      </form>
      <div className={styles.taskFilters}>
        <button className={styles.active}>Todas</button>
        <button>Pendentes</button>
        <button>Concluídas</button>
      </div>

      <div className={styles.taskList}>
        <ul>
          <li>Teste</li>
          <li>Estudar</li>
          <li>Comprar Racao</li>
          <li>Teste</li>
          <li>Estudar</li>
          <li>Comprar Racao</li>
          <li>Teste</li>
          <li>Estudar</li>
          <li>Comprar Racao</li>
        </ul>
      </div>

      <div className={styles.footer}></div>
    </div>
  );
}
