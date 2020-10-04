import styles from './spinner.module.css'

const Spinner = () => {
  return (
    <div className={styles['lds-css']}>
      <div className={styles['lds-double-ring']}>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Spinner;
