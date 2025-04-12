import styles from './ItemButton.module.css';

const Button = ({children}) => {
  return (
    <>
    <h1></h1>
    <button className={styles.button} >
      {children}
    </button>
    </>
  );
}
export default Button;