import React from 'react';
import "./index.scss";
import { ILoader } from '../types';
const PulsatingRings = (props: ILoader) => {
    let className = "pulsating-rings";
    if (props.className) {
        className += ` ${props.className}`;
    }
    return (
        <div className={className}>
            <div className="loader">
                <div style={{ borderColor: props.color, width: props.width, height: props.width }}></div>
                <div style={{ borderColor: props.color, width: props.width, height: props.width }}></div>
            </div>
        </div>
    )
}

export default PulsatingRings
