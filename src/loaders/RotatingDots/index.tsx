import React from 'react';
import "./index.scss";
import { ILoader } from '../types';
const RotatingDots = (props: { dotsSize?: number | string } & ILoader) => {
    let className = "rotating-dots";
    if (props.className) {
        className += ` ${props.className}`;
    }
    return (
        <div className={className}>
            <div className="loader" style={{width: props.width, height: props.width}}>
                <div style={{backgroundColor: props.color, width: props.dotsSize, height: props.dotsSize, }}></div>
                <div style={{backgroundColor: props.color, width: props.dotsSize, height: props.dotsSize, }}></div>
                <div style={{backgroundColor: props.color, width: props.dotsSize, height: props.dotsSize, }}></div>
                <div style={{backgroundColor: props.color, width: props.dotsSize, height: props.dotsSize, }}></div>
            </div>
        </div>
    )
}

export default RotatingDots
