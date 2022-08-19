import React, { useEffect, useState } from 'react';
import rgbToHex from './rgbToHex';


const SingleColor = ({ rgb, weight, index, hexColor }) => {
    const [alert, setAlert] = useState(false);
    let bcg = rgb.join(',');
    // let hex = rgbToHex(...rgb);//ei vabeo kora jabe , othoba direct hexColor tao newa jabe props tekhe
    let hexValue = `#${hexColor}`;


    useEffect(() => {
        const timeout = setTimeout(() => {
          setAlert(false)
        }, 1000)
        return () => clearTimeout(timeout)
      }, [alert]);



    return (
        <article
            className={`color ${index > 10 && 'color-light'}`}
            style={{ backgroundColor: `rgb(${bcg})` }}
            onClick={() => {
                setAlert(true)
                navigator.clipboard.writeText(hexValue)
            }}
        >
            <p className='percent-value'>{weight}%</p>
            <p className='color-value'>{hexValue}</p>
            {alert && <p className='alert'>copied to clipboard</p>}
        </article>
    );
};

export default SingleColor;