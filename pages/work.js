import React, { useState } from 'react';
import { useRouter } from "next/router";
import Page from "./components/page";
import PictureHolder from "./components/pictureHolder";
import { defined } from '../utils';
import styles from '../styles/Work.module.css';
import watermark1 from '../public/Watermark.jpg';
import watermark3 from '../public/Watermarked3.jpg';
import watermark4 from '../public/Watermarked4.jpg';
import watermark5 from '../public/Watermarked5.jpg';
import watermark6 from '../public/Watermarked6.jpg';
import watermark7 from '../public/Watermarked7.jpg';
import watermark8 from '../public/Watermarked11.jpg';
import consoleimg from '../public/console.jpg';
import ZoomPicture from './components/zoomPicture';

function Work() {
    const [zoomPic, setZoomPic] = useState({ job: -1, image: -1 });
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

    const clickArrow = (left = false) => {
        let image = zoomPic.image + (left ? -1 : 1);
        const arrLen = jobs[zoomPic.job].images.length;
        if (image === -1) image = arrLen - 1;
        if (image === arrLen) image = 0;
        setZoomPic({ ...zoomPic, image });
    }

    const _body = () => !defined(index) ? (
        <div className={styles.workBody}>
            {jobs.map((job, index) => (
                <div key={`${job.title}-pic-holder`}>
                    <PictureHolder
                        job={job}
                        index={index}
                        clickZoom={() => {
                            setZoomPic({ job: index, image: 0 });
                        }}
                    />
                </div>
            ))}
        </div>
    ) : (
        <div className={styles.workJobContainer}>
            <img
                className={styles.workJobImage}
                onClick={() => setZoomPic({ job: index, image: 0 })}
                src={jobs[index].images[0].src}
                alt={jobs[index].title}
                style={{
                    resizeMode: 'cover',
                    margin: 20
                }}
                width={Math.min(jobs[index].images[0].width, 1090)}
            />
            <div className={styles.jobTitle}>{jobs[index].title}</div>
            <div className={styles.workBody}>
                {jobs[index].images.map((image, i) => (
                    <img
                        className={styles.workJobImage}
                        onClick={() => setZoomPic({ job: index, image: i })}
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
        <Page>
            {zoomPic.job !== -1 && zoomPic.image !== -1 && (
                <ZoomPicture
                    pic={jobs[zoomPic.job].images[zoomPic.image]}
                    clickArrow={defined(index) && clickArrow}
                    onXClick={() => setZoomPic({ job: -1, image: -1 })}
                />
            )}
            {_body()}
        </Page>
    );
}

export default Work