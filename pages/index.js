import Head from 'next/head'
import styles from '../styles/Home.module.css';
import mainImage from '../public/main-image.jpg';
import watermark1 from '../public/Watermark.jpg';
import background from '../public/background.jpeg';
import watermarked12 from '../public/Watermark.jpg';
import shop from '../public/shop.jpg';
import complete from '../public/complete.jpg';
import TitleBar from './components/titleBar';

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Claverm Interiors</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <TitleBar />
        <div
          className={styles.bottomSection}
          style={{
            backgroundImage: `url(${background.src})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% 100%',
            fill: '20%'
          }}
        >
          <div className={styles.mainImage}>
            <img src={mainImage.src} alt="main-image" width="100%"></img>
          </div>
          <img src={watermark1.src} alt="main-image" width="50%"></img>
          <div className={styles.descriptionSection}>
            <div className={styles.decriptionTitle}>
              Why Claverm cares about your interior.
            </div>
            <div className={styles.decriptionText}>
              Every space we spend our time in deserves to be homely and should lift us up emotionally. We as Claverm Interiors we add a touch of class to make it look modern and stylish,antique and polished and to fit our clients standards and preference.
            </div>
          </div>
          <img src={shop.src} alt="main-image" width="50%"></img>
          <img src={complete.src} alt="main-image" width="50%"></img>
        </div>
      </main>
    </div>
  )
};
        export default Home