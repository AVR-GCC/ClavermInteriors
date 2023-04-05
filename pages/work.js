import PictureHolder from "./components/pictureHolder";
import TitleBar from "./components/titleBar";
import styles from '../styles/Home.module.css';
import watermark1 from '../public/Watermark.jpg';
import watermark3 from '../public/Watermarked3.jpg';
import watermark4 from '../public/Watermarked4.jpg';
import watermark5 from '../public/Watermarked5.jpg';
import watermark6 from '../public/Watermarked6.jpg';
import watermark7 from '../public/Watermarked7.jpg';
import watermark8 from '../public/Watermarked11.jpg';
import console from '../public/console.jpg';
import Footer from './components/footer';


const Work = () => {
    const jobs = [
        {
            title: 'Kileleshwa',
            images: [
                watermark1,
                console
            ]
        },
        {
            title: 'Kilimani 1',
            images: [
                watermark4,
                watermark5
            ]
        },
        {
            title: 'Kilimani 2',
            images: [
                watermark3
            ]
        },
        {
            title: 'Some',
            images: [
                watermark7
            ]
        },
        {
            title: 'Other',
            images: [
                watermark8
            ]
        },
        {
            title: 'Project',
            images: [
                watermark6
            ]
        },
    ];

    const _body = () => (
        <div className={styles.workBody}>
            {jobs.map((job, index) => (
                <div
                    key={`${job.title}-pic-holder`}
                    className={styles.pictureHolderHolder}
                >
                    <PictureHolder
                        job={job}
                        index={index}
                        clickZoom={() => {
                            console.log('zoom');
                        }}
                    />
                </div>
            ))}
        </div>
    )/* : (
        <div>
            <img
                src={jobs[index].images[0].src}
                alt={jobs[index].title}
            />
            <div>
                {jobs[index].map(image => (
                    <img
                        src={image.src}
                        alt={image.src}
                        style={{
                            resizeMode: 'cover'
                        }}
                        height={500}
                        widht={500}
                    />
                ))}
            </div>
        </div>
    );*/

    return (
        <div>
            <TitleBar />
            <div className={styles.bottomSection}>
                {_body()}
                <Footer />
            </div>
        </div>
    );
}

export default Work