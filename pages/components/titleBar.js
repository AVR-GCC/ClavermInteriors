import styles from '../../styles/Home.module.css';
import Link from 'next/link';
import logoImage from '../../public/logo-image.png';

const TitleBar = () => (
    <div className={styles.topSection}>
        <Link className={styles.logo} href="/">
            <img src={logoImage.src} alt="logo-image" width="300px"></img>
        </Link>
        <div className={styles.tabs}>
            <Link className={styles.tab} href="/">Home</Link>
            <Link className={styles.tab} href="/work">Work</Link>
            {/* <Link className={styles.tab} href="/press">press</Link> */}
            <Link className={styles.tab} href="/contact">contact</Link>
        </div>
    </div>
);

export default TitleBar;