import { useState, useRef } from 'react';
import styles from '../../styles/PictureHolder.module.css';
import Animate from './animate';

const PictureHolder = (props) => {
    const {
        job,
        width = 300,
        height = 200,
        clickView,
        clickZoom
    } = props;

    const [hover, setHover] = useState(false);

    const animateFunctionsView = useRef({});
    const animateFunctionsZoom = useRef({});

    let imgSizeProp = { width: hover ? '120%' : '100%' };

    if (job.images[0].height < job.images[0].width) {
        imgSizeProp = { height: hover ? '120%' : '100%' };
    }

    const inflate = () => {
        if (animateFunctionsView.current.inflate) {
            animateFunctionsView.current.inflate({ sizeIncrementAmount: 3 });
        }
        if (animateFunctionsZoom.current.inflate) {
            animateFunctionsZoom.current.inflate({ sizeIncrementAmount: 3 });
        }
    };

    const reset = () => {
        if (animateFunctionsView.current.reset) {
            animateFunctionsView.current.reset();
        }
        if (animateFunctionsZoom.current.reset) {
            animateFunctionsZoom.current.reset();
        }
    };

    return (
        <div className={styles.pictureHolderContainer} onClick={clickView}>
            <div className={styles.pictureTitle}>{job.title}</div>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width,
                    height,
                    margin: 10,
                    overflow: "hidden"
                }}
                onMouseEnter={async () => {
                    setHover(true);
                    inflate();
                }}
                onMouseLeave={async () => {
                    setHover(false);
                    reset();
                }}
            >
                <div
                    style={{
                        width,
                        height,
                        position: 'absolute',
                        background: hover ? '#00000055' : 'transparent',
                        transition: '500ms',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    {!!clickView && (
                        <Animate
                            getMethods={funcsObject => animateFunctionsView.current = funcsObject}
                            originalSize={0}
                        >
                            <div
                                onClick={clickView}
                                className={styles.pictureButton}
                            >
                                VIEW
                            </div>
                        </Animate>
                    )}
                    {!!clickZoom && (
                        <Animate
                            getMethods={funcsObject => animateFunctionsZoom.current = funcsObject}
                            originalSize={0}
                        >
                            <div
                                onClick={clickZoom}
                                className={styles.pictureButton}
                            >
                                ZOOM
                            </div>
                        </Animate>
                    )}
                </div>
                <img
                    src={job.images[0].src}
                    alt={job.title}
                    style={{
                        resizeMode: 'cover',
                        transition: '500ms'
                    }}
                    {...imgSizeProp}
                ></img>
            </div>
        </div>
    );
}

export default PictureHolder;