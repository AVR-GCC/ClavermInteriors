import { useState, useRef, useEffect } from 'react';
import styles from '../../styles/Home.module.css';

const IMAGE_TIME = 2000;
const OPACITY_INCREMENT_TIME = 8;
const OPACITY_INCREMENT_AMOUNT = 1;

const ImageReel = ({
    images,
    width = "calc(100% + 16px)",
    height = 700
}) => {
    const [imageOpacity, setImageOpacity] = useState(1);
    const [imageIndex, setImageIndex] = useState(0);
    const [nextImageIndex, setNextImageIndex] = useState(1);
    const intervalRef = useRef(null);

    const incrementOpacity = (opacity = imageOpacity) => {
        const prevOpacity = opacity * 100;
        const newOpacity = (prevOpacity - OPACITY_INCREMENT_AMOUNT) / 100;
        if (newOpacity <= 0) {
            const newNextImage = nextImageIndex + 1 === images.length ? 0 : nextImageIndex + 1;
            setImageOpacity(0);
            setImageIndex(nextImageIndex);
            setTimeout(() => {
                setImageOpacity(1);
                setTimeout(() => {
                    setNextImageIndex(newNextImage)
                }, 100);
            }, 100);
        } else {
            setImageOpacity(newOpacity);
            setTimeout(() => incrementOpacity(newOpacity), OPACITY_INCREMENT_TIME);
        }
    };

    useEffect(() => {
        intervalRef.current = setInterval(incrementOpacity, IMAGE_TIME);
        return () => {
            clearInterval(intervalRef.current);
        }
    });

    return (
        <div className={styles.mainImage}>
            <img
                style={{
                    position: 'absolute',
                    width,
                    height,
                    opacity: imageOpacity,
                    zIndex: 2
                }}
                src={images[imageIndex]}
                alt="main-image"
            ></img>
            <img
                style={{
                    position: 'absolute',
                    width,
                    height,
                    zIndex: 1
                }}
                src={images[nextImageIndex]}
                alt="secondary-image"
            ></img>
            <div style={{ width, height }} />
        </div>
    );
}

export default ImageReel;