
import styles, { layout } from "../style";
import vr from "../assets/vr.png";

const Billing = () => (
  <section id="mission" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={vr} alt="virtual reality" className="w-[100%] h-[100%] relative z-[5]" />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        To be pioneers in the area of Blockchain <br className="sm:block hidden" /> and Metaverse</h2>
     

      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
       
      </div>
    </div>
  </section>
);

export default Billing;
