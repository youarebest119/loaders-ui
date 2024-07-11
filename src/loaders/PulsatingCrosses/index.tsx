import React from 'react';
import "./index.scss";
import { ILoader } from '../types';
const PulsatingCrosses = (props: ILoader) => {
    let className = "pulsating-crosses";
    if (props.className) {
        className += ` ${props.className}`;
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

export default PulsatingCrosses
