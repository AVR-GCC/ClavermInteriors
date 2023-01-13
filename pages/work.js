import TitleBar from "./components/titleBar";
import styles from '../styles/Home.module.css';
import watermark1 from '../public/Watermark.jpg';
import console from '../public/console.jpg';


const Work = () => (
    <div>
        <TitleBar />
        <div className={styles.bottomSection}>
            Completed Samples
            <div className={styles.descriptionSection}>
            <div className={styles.decriptionTitle}>
            Project 1.
        </div>
        <div className={styles.decriptionText}></div>
        Kileleshwa Project
        </div>
        
    <img src={watermark1.src} alt="main-image" width="30%"></img>
    </div>
    <img src={console.src} alt="watermark" width="30%"></img>

    <div className={styles.decriptionText}></div>
    Kilimani Project
    </div>
    
)

export default Work