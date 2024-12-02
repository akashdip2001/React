import styles from "./Button.module.css";

const Button = ({ isOutline, icon, text }) => {
  return (
    <div className={isOutline ? styles.white_btn : styles.Primary_btn}>
      {icon}
      {text}
    </div>
  );
};

export default Button;