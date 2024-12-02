import styles from './Button.module.css'

const Button = (props) => {
  return (
    <div className={styles.btn}>
      {props.icon}
      {props.text}
    </div>
  );
}

export default Button
