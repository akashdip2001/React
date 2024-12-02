import Button from "../Button/Button";
import styles from "./ContactForm.module.css";
import { MdMessage } from "react-icons/md";
import { HiPhone } from "react-icons/hi";
// import callIcon from "../../../public/call.svg";
import { MdMailOutline } from "react-icons/md";
import { TbMessageUp } from "react-icons/tb";

const ContactForm = () => {
  return (
    <section className={`${styles.box} container`}>
      <div className={styles.box_form}>
        <div className={styles.top_btn}>
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize="24px" />}
          />
          <Button text="VIA CALL" icon={<HiPhone fontSize="24px" />} />
        </div>
        <Button
          isOutline={true}
          text="VIA EMAIL FORM"
          icon={<MdMailOutline fontSize="24px" />}
        />
        <form>
          <div className={styles.form_name}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.form_name}>
            <label htmlFor="email">G-mail</label>
            <input type="email" name="email" />
          </div>
          <div className={styles.form_name}>
            <label htmlFor="text">Message</label>
            <textarea name="text" />
          </div>
          <div className={styles.SUBMIT_btn}>
            <Button text="SUBMIT" icon={<TbMessageUp fontSize="24px" />} />
          </div>
        </form>
      </div>
      <div className={styles.box_Img}>
        <img src="img/Service.svg" alt="" />
      </div>
    </section>
  );
};

export default ContactForm;
