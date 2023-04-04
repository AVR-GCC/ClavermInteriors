import { useState } from 'react';

const PictureHolder = (props) => {
    const {
        image,
        width = 300,
        height = 200
    } = props;

    const [hover, setHover] = useState(false);

    return (
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
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <div
                style={{
                    width,
                    height,
                    position: 'absolute',
                    background: hover ? '#00000055' : 'transparent',
                    transition: '500ms'
                }}
            />
            <img
                src={image}
                alt={image}
                width={hover ? '120%' : '100%'}
                style={{
                    resizeMode: 'cover',
                    transition: '500ms'
                }}
            ></img>
        </div>
    );
}

export default PictureHolder;