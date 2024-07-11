import React from 'react';
import "./index.scss";
import { ILoader } from '../types';
const FlashingDots = (props: ILoader) => {
    let className = "flashing-dots";
    if (props.className) {
        className += ` ${props.className}`;
    }
    return (
        <div className={className}>
            <div className="loader">
                <div style={{ width: props.width, height: props.width, backgroundColor: props.color }}></div>
                <div style={{ width: props.width, height: props.width, backgroundColor: props.color }}></div>
                <div style={{ width: props.width, height: props.width, backgroundColor: props.color }}></div>
            </div>
        </div>
    )
}

export default FlashingDots
