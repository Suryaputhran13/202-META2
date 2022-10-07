import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => (
  <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative `}>
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />

    <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
      {/*<h2 className={styles.heading2}>
         <br className="sm:block hidden" /> saying about us
      </h2>*/}
      <div className="w-full md:mt-0 mt-6">
        <h1 className={`${styles.heading2} text-left margin-left 10 em  max-w-[1500px]`}>About 202 META</h1>
        <p className={`${styles.paragraph} text-centre  max-w-[1500px]`}>
        202 META is committed to making a positive & sustainable impact on the global community and the environment they are a part of through industry leading technology. At 202 META we will plan to provide our community with a new experience of Metaverse through NFTs , Play to Earn Games , Crypto mining and also swapping different tokens through our decentralized exchange platform. In order to make our platform more cost effective we use EOSIO Blockchain based technologies and smart contracts so that transcation fees inside the network is zero.
        </p>
      </div>
    </div>

    <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
      {feedback.map((card) => <FeedbackCard key={card.id} {...card} />)}
    </div>
  </section>
);

export default Testimonials;
