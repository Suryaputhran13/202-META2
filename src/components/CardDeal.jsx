import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";
import metaverse from "../assets/metaverse.png";


const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find a better solution <br className="sm:block hidden" /> in few easy
        steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        We use cutting edge technologies to provide our clients with the best services available in the market.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
    <img src={metaverse} alt="billing" className="w-[100%] h-[100%]" />
    </div>
  </section>
  
  
);


export default CardDeal;
