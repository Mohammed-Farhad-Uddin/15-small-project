import React from 'react';

function componentToHex(x) {
    let hex = x.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
}

const rgbToHex = (r, g, b) => {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b)
};

export default rgbToHex;