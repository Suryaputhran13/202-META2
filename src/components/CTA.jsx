import styles from "../style";
import Button from "./Button";


const CTA = () => (
  <section id="contact" className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <p className={styles.paragraph}>Contact US : info@202portal.com</p>
      <p className={styles.paragraph}>Location : 212, Sultan Ahmed Nasser Lootah Building, Al Qusais, Dubai.  </p>
      <p className={styles.paragraph}>Phone : +97145484422</p>
      
      
      

     
    </div>

    {/*<div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button />
</div>*/}
  </section>
);

export default CTA;
