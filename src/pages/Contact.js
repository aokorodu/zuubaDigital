import styles from "./Contact.module.css";

export function Contact() {
  return (
    <>
      <div className={styles.holder}>
        <div className={styles.title}>Abraham Okorodudu</div>
        <div className={styles.description}>
          <div>aokorodu@gmail.com</div>
          <div>215.740.7369</div>
          <a href={"https://github.com/aokorodu"} target="_blank">
            github
          </a>
          <a href={"https://www.instagram.com/zuubadigital/"} target="_blank">
            instagram
          </a>
        </div>
      </div>
    </>
  );
}
