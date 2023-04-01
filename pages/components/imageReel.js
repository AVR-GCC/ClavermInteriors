import { useState, useRef, useEffect } from 'react';
import { noop } from 'lodash';
import styles from '../../styles/ImageReel.module.css';
import { wait } from '../../utils';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

const IMAGE_TIME = 3000;
const OPACITY_INCREMENT_TIME = 8;
const OPACITY_INCREMENT_AMOUNT = 1;

const ImageReel = ({
    images,
    width = "100%",
    height = 700
}) => {
    const [imageOpacity, setImageOpacity] = useState(1);
    const [topImageIndex, setTopImageIndex] = useState(0);
    const [bottomImageIndex, setBottomImageIndex] = useState(1);
    const [canSwitch, setCanSwitch] = useState(true);
    const intervalRef = useRef(null);
    const topImageIndexRef = useRef(0);

    const getNewNextImageIndex = (index) => {
        if (index === images.length) return 0;
        if (index === -1) return images.length - 1;
        return index;
    }

    const fade = () => new Promise(async (resolve) => {
        let opacity = 1;
        while (opacity > 0) {
            const prevOpacity = opacity * 100;
            const newOpacity = (prevOpacity - OPACITY_INCREMENT_AMOUNT) / 100;
            setImageOpacity(newOpacity);
            opacity = newOpacity;
            await wait(OPACITY_INCREMENT_TIME);
        }
        setImageOpacity(0);
        resolve(true);
    });

    const fadeAndSwitch = async (toIndex) => {
        setCanSwitch(false);
        setBottomImageIndex(toIndex);
        await fade();
        setTopImageIndex(toIndex);
        topImageIndexRef.current = toIndex;
        await wait(100);
        setImageOpacity(1);
        setCanSwitch(true);
    };

    const fadeAndSwitchNext = () => {
        const nextNextIndex = getNewNextImageIndex(topImageIndexRef.current + 1);
        fadeAndSwitch(nextNextIndex);
    }

    useEffect(() => {
        intervalRef.current = setInterval(fadeAndSwitchNext, IMAGE_TIME);
        return () => clearInterval(intervalRef.current);
    }, []);

    const clickArrow = (left = false) => {
        clearInterval(intervalRef.current);
        const nextIndexUncorrected = topImageIndexRef.current + (left ? -1 : 1);
        const nextNextIndex = getNewNextImageIndex(nextIndexUncorrected);
        fadeAndSwitch(nextNextIndex);
    };

    const clickArrowLeft = () => clickArrow(true);

    const clickArrowRight = () => clickArrow(false);

    const _arrows = () => (
        <div className={styles.arrowContainer} style={{ height }}>
            <div
                className={styles.arrow}
                onClick={canSwitch ? clickArrowLeft : noop}
            >
                <AiOutlineArrowLeft />
            </div>
            <div
                className={styles.arrow}
                onClick={canSwitch ? clickArrowRight : noop}
            >
                <AiOutlineArrowRight />
            </div>
        </div>
    )

    return (
        <div className={styles.mainImage}>
            {_arrows()}
            <img
                className={styles.image}
                style={{
                    width,
                    height,
                    opacity: imageOpacity,
                    zIndex: 2
                }}
                src={images[topImageIndex]}
                alt="main-image"
            ></img>
            <img
                className={styles.image}
                style={{
                    width,
                    height,
                    zIndex: 1
                }}
                src={images[bottomImageIndex]}
                alt="secondary-image"
            ></img>
            <div style={{ width, height }} />
        </div>
    );
}

export default ImageReel;