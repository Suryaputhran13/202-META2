import styles from "./style";
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "./components";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        
        <CTA>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.1352968836827!2d55.37995071465239!3d25.266033735105314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5dabbec31129%3A0x6e255e0351c425ce!2s202%20PORTAL%20LLC!5e0!3m2!1sen!2sae!4v1665121975383!5m2!1sen!2sae" width="200" height="50" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </CTA>       
        <Footer>
        
        </Footer>
        
      </div>
    </div>
  </div>
);

export default App;
