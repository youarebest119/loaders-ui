import React from 'react';
import "./index.scss";
import { ILoader } from '../types';
const PulsatingCircle = (props: ILoader) => {
    let className = "pulsating-circle";
    if (props.className) {
        className += ` ${props.className}`;
    }
    return (
        <div className={className}>
            <div className="loader" style={{ width: props.width, height: props.width, backgroundColor: props.color }}></div>
        </div>
    )
}

export default PulsatingCircle
