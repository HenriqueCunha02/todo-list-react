import styles from './styles.module.css';

export function DefaultInput() {
  return (
    <form className={styles.inputContainer}>
      <input
        type='text'
        className={styles.defaultInput}
        placeholder='O que você precisa fazer?'
      />
      <button className={styles.inputButton}>Adicionar</button>
    </form>
  );
}
