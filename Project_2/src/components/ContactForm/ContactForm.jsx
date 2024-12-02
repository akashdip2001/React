import Button from "../Button/Button";
import styles from "./ContactForm.module.css";
import { MdMessage } from "react-icons/md";
import { HiPhone } from "react-icons/hi";
// import callIcon from "../../../public/call.svg";
import { MdMailOutline } from "react-icons/md";

const ContactForm = () => {
  return (
    <section className={`${styles.box} container`}>
      <div className={styles.box_form}></div>
      <div className={styles.top_btn}>
        <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px" />} />
        <Button text="VIA CALL" icon={<HiPhone fontSize="24px" />} />
      </div>
      <Button isOutline={true} text="VIA EMAIL FORM" icon={<MdMailOutline fontSize="24px" />} />
      <div className={styles.box_Img}></div>
    </section>
  );
};

export default ContactForm;
