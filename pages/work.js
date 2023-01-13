import { useState } from 'react';
import TitleBar from "./components/titleBar";
import styles from '../styles/Home.module.css';
import watermark1 from '../public/Watermark.jpg';
import watermark3 from '../public/Watermarked3.jpg';
import watermark4 from '../public/Watermarked4.jpg';
import watermark5 from '../public/Watermarked5.jpg';
import console from '../public/console.jpg';


const Work = () => {
    const [currentJob, setCurrentJob] = useState(0);
    const jobs = [
        {
            title: 'Kileleshwa',
            images: [
                watermark1.src,
                console.src
            ]
        },
        {
            title: 'Kilimani 1',
            images: [
                watermark4.src,
                watermark5.src
            ]
        },
        {
            title: 'Kilimani 2',
            images: [
                watermark3.src
            ]
        },
    ];

    const _tabs = () => (
        <div 
            className={styles.tabs}
            style={{ borderBottom: '2px solid rgb(240, 240, 240)' }}
        >
            {jobs.map((job, index) => (
                <div
                    className={styles.tab}
                    onClick={() => setCurrentJob(index)}
                    style={{ border: `2px solid ${currentJob === index ? 'rgb(0, 240, 240)' : 'transparent'}` }}
                    /* this was added after we finished talking
                    I added the style that adds a border to the tab
                    what it says is: add a 2 pixel solid border,
                    if the index of this tab is the "currentJob" make it this (rgb(0, 240, 240)) color,
                    otherwise make it transparent
                    */
                >
                    {job.title}
                </div>
            ))}
        </div>
    );

    const _project = (job) => (
        <div>
            <div className={styles.descriptionSection}>
                <div className={styles.decriptionTitle}>
                    Project {currentJob + 1}.
                </div>
                <div className={styles.decriptionText}>{job.title}</div>
            </div>
            {job.images.map((image, index) => (
                <img src={image} alt={image} width="50%" style={{ marginLeft: '25vw', marginTop: index === 0 ? 0 : 40 }}></img>
            ))}
        </div>
    )

    return (
        <div>
            <TitleBar />
            <div className={styles.bottomSection}>
                {_tabs()}
                {_project(jobs[currentJob])}
            </div>
        </div>
    );
}

export default Work