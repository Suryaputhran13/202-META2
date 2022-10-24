import { features } from "../constants";
import styles, { layout } from "../style";
import nft1 from "../assets/nft1.png";
import nft2 from "../assets/nft2.png";
import vr from "../assets/vr.png";
import dex1 from "../assets/dex1.png";
import dex3 from "../assets/dex3.png";


const FeatureCard = ({ icon, title, content, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () =>  (
  <section id="features" className={layout.sectionImg}>
    <div className={layout.sectionInfo} >
      
     
    <div className={`${layout.sectionInfo} flex-col display : block;`}>  <img src={nft1} alt="non fungible tokens" className="w-[100%] h-[10%] relative z-[5]" /> </div>
     <br></br> 
     <br></br>
    <div className={`$layout.sectionInfo`}  > <img src={nft2} alt="non fungible tokens" className="w-[100%] h-[10%] sticky z-[4] display : block;" /> </div>
     <br></br>
     <br></br>
     <div> <img src={dex1} alt="decentralized_exchange" className="w-[100%] h-[100%] sticky z-[5] display : block;" /> </div>
     <br></br>
     <br></br>
     <div> <img src={dex3} alt="decenralized_exchange" className="w-[100%] h-[40%]  relative z-[5]"/> </div> 
     
   
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      

      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;
