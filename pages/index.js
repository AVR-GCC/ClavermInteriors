import Head from 'next/head'
import styles from '../styles/Home.module.css';
import mainImage from '../public/main-image.jpg';
import watermark2 from '../public/watermarked2.jpg';
import watermark3 from '../public/Watermarked3.jpg';
import watermark4 from '../public/Watermarked4.jpg';
import TitleBar from './components/titleBar';
import ImageReel from './components/imageReel';
import Footer from './components/footer';

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Claverm Interiors</title>
      </Head>

      <main>
        <TitleBar />
        <div className={styles.bottomSection}>
          <ImageReel images={[
            mainImage.src,
            watermark2.src,
            watermark3.src,
            watermark4.src
          ]} />
          <div className={styles.descriptionSection}>
            <div className={styles.decriptionTitle}>
              Why Claverm cares about your interior.
            </div>
            <div className={styles.divider} />
            <div className={styles.decriptionText}>
              Every space we spend our time in deserves to be homely and should lift us up emotionally. We as Claverm Interiors, add a touch of class to make it look modern and stylish, antique and polished and to fit our clients standards and preference.
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  )
};

export default Home;