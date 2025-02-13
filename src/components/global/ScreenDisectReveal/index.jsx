// components/GravityPage.jsx
import { useEffect } from 'react';
import styles from './page.module.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const ScreenDisectReaveal = ({centerPage}) => {
    
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: `#main`,
        start: "50% 50%",
        end: "150% 50%",
        scrub: 2,
        pin: true,
      },
    });

    tl.to(`#center`, { height: "100vh" }, 'a')
      .to(`#top`, { top: "-50%" }, 'a')
      .to(`#bottom`, { bottom: "-50%" }, 'a')
      .to(`#top-h1`, { top: "60%" }, 'a')
      .to(`#bottom-h1`, { bottom: "-30%" }, 'a')
      .to(`#center-h1`, { top: "-30%" }, 'a')
      .to(`.${styles.content}`, { delay: -0.2, marginTop: "0%" }, 'a');
  }, []);

  return (
    <div id="main" className={styles.main}>
      <div id="top" className={styles.top}>
        <h1 id="top-h1" className={`${styles.h1} ${styles.topH1}`}>TEAM</h1>
      </div>
      <div id="center" className={styles.center}>
        {centerPage}
      </div>
      <div id="bottom" className={styles.bottom}>
        <h1 id="bottom-h1" className={`${styles.h1} ${styles.bottomH1}`}>TEAM</h1>
      </div>
    </div>
  );
};

export default ScreenDisectReaveal;
