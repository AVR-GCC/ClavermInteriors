import Head from 'next/head'
import styles from '../styles/Home.module.css';
import mainImage from '../public/main-image.jpg';
import secondaryImage from '../public/secondary-image-1.jpg';
import logoImage from '../public/logo-image.png';
import Link from 'next/link';

const Home = () => {
  console.log('Hello Lavein, how are you?', secondaryImage);
  return (
    <div className={styles.container}>
      <Head>
        <title>Claverm Interiors</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={styles.topSection}>
          <div className={styles.logo}>
            <img src={logoImage.src} alt="logo-image" width="300px"></img>
          </div>
          <div className={styles.tabs}>
            <div className={styles.tab}>Home</div>
            <div className={styles.tab}>Work</div>
            <div className={styles.tab}>press</div>
            <Link href="/contact">
              <div className={styles.tab}>contact</div>
            </Link>
          </div>
        </div>
        <div className={styles.bottomSection}>
          <div className={styles.mainImage}>
            <img src={mainImage.src} alt="main-image" width="100%"></img>
          </div>
          <div className={styles.descriptionSection}>
            <div className={styles.decriptionTitle}>
              Why Claverm cares about your interior.
            </div>
            <div className={styles.decriptionText}>
              Every space we spend our time in deserves to be homely and habitable. We as Claverm Interiors we add a touch of class to make it look modern and stylish,antique and polished and to fit our clients standards and preference.
          </div>
          <div className={styles.secondaryImage}></div>
            <img src={secondaryImage.src} alt="secondary-image" width="100%"></img>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home;