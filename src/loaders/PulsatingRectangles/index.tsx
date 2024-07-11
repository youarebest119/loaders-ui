import React from 'react';
import "./index.scss";
import { ILoader } from '../types';
const PulsatingRectangles = (props: ILoader) => {
    let className = "pulsating-rectangles";
    if (props.className) {
        className += ` ${props.className}`
    }
    return (
        <div className={className}>
            <div className="loader">
                <div style={{ backgroundColor: props.color, width: props.width, height: props.width }}></div>
                <div style={{ backgroundColor: props.color, width: props.width, height: props.width }}></div>
                <div style={{ backgroundColor: props.color, width: props.width, height: props.width }}></div>
            </div>
        </div>
    )
}

export default PulsatingRectangles
