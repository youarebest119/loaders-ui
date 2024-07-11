import React from 'react';
import "./index.scss";
import { ILoader } from '../types';
const PulsatingHexagon = (props: ILoader) => {
    let className = "pulsating-hexagon";
    if (props.className) {
        className += ` ${props.className}`;
    }
    return (
        <div className={className}>
            <div className="loader" style={{ width: props.width, height: props.width }}>
                <div style={{ backgroundColor: props.color }}></div>
                <div style={{ backgroundColor: props.color }}></div>
            </div>
        </div>
    )
}

export default PulsatingHexagon
