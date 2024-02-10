import React from 'react';
import otters from './otters.png'; // Tell webpack this JS file uses this image


function Otters() {
    return <img src={otters} alt="otters" style={{ width: '300px', height: 'auto' }} />;
}

export default Otters;