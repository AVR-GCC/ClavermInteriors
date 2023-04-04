import { useState, useEffect } from 'react';
import { wait } from '../../utils';

const OPACITY_INCREMENT_TIME = 8;
const OPACITY_INCREMENT_AMOUNT = 1;

const Animate = ({
    children,
    getMethods
}) => {
    const [opacity, setOpacity] = useState(1);

    const reset = () => {
        setOpacity(1);
    }

    const fadeOut = (props) => new Promise(async (resolve) => {
        const {
            from = 1,
            to = 0,
            opacityIncrementAmount = OPACITY_INCREMENT_AMOUNT,
            opacityIncrementTime = OPACITY_INCREMENT_TIME
        } = props || {};
        let curOpacity = from;
        while (curOpacity > to) {
            const prevOpacity = curOpacity * 100;
            curOpacity = (prevOpacity - opacityIncrementAmount) / 100;
            setOpacity(curOpacity);
            await wait(opacityIncrementTime);
        }
        setOpacity(to);
        resolve(true);
    });

    useEffect(() => {
        getMethods({ fadeOut, reset });
    }, []);

    return (
        <div
            style={{ opacity }}
        >
            {children}
        </div>
    );
}

export default Animate;