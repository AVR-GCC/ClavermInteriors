import React from 'react'
import { useRouter } from "next/router";
import PictureHolder from "./components/pictureHolder";
import TitleBar from "./components/titleBar";
import { defined } from '../utils';
import styles from '../styles/Home.module.css';
import watermark1 from '../public/Watermark.jpg';
import watermark3 from '../public/Watermarked3.jpg';
import watermark4 from '../public/Watermarked4.jpg';
import watermark5 from '../public/Watermarked5.jpg';
import watermark6 from '../public/Watermarked6.jpg';
import watermark7 from '../public/Watermarked7.jpg';
import watermark8 from '../public/Watermarked11.jpg';
import consoleimg from '../public/console.jpg';
import Footer from './components/footer';

function Work() {
    const router = useRouter();
    const index = router?.query?.index;
    const jobs = [
        {
            title: 'Kileleshwa',
            images: [
                watermark1,
                consoleimg,
                watermark4,
                watermark5,
                watermark8,
                watermark6
            ]
        },
        {
            title: 'Kilimani 1',
            images: [
                watermark4,
                watermark5,
                watermark3,
                watermark7,
                watermark8,
                watermark6
            ]
        },
        {
            title: 'Kilimani 2',
            images: [
                watermark3,
                watermark7,
                watermark8,
                watermark6
            ]
        },
        {
            title: 'Some',
            images: [
                watermark7,
                watermark8,
                watermark6
            ]
        },
        {
            title: 'Other',
            images: [
                watermark8,
                watermark6
            ]
        },
        {
            title: 'Project',
            images: [
                watermark6,
                watermark7,
                watermark8
            ]
        },
    ];

    const _body = () => !defined(index) ? (
        <div className={styles.workBody}>
            {jobs.map((job, index) => (
                <div key={`${job.title}-pic-holder`}>
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
    ) : (
        <div className={styles.workJobContainer}>
            <img
                src={jobs[index].images[0].src}
                alt={jobs[index].title}
                style={{
                    resizeMode: 'cover',
                    margin: 20
                }}
                width={Math.min(jobs[index].images[0].width, 1090)}
            />
            <div className={styles.decriptionTitle}>{jobs[index].title}</div>
            <div className={styles.workBody}>
                {jobs[index].images.map(image => (
                    <img
                        key={image.src}
                        src={image.src}
                        alt={image.src}
                        style={{
                            resizeMode: 'cover',
                            height: 350,
                            width: 350,
                            margin: 10
                        }}
                        height={350}
                        widht={350}
                    />
                ))}
            </div>
        </div>
    );

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