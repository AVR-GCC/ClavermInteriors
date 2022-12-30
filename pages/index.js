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
            <div className={styles.tab}>contact</div>
          </div>
        </div>
        <div className={styles.bottomSection}>
          <div className={styles.mainImage}>
            <img src={mainImage.src} alt="main-image" width="100%"></img>
          </div>
          <div className={styles.descriptionSection}>
            <div className={styles.decriptionTitle}>
              Who are we?
            </div>
            <div className={styles.decriptionText}>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)
            </div>
          </div>
          <div className={styles.secondaryImages}>
            <img src={secondaryImage.src} alt="secondary-image" width="100%"></img>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home;