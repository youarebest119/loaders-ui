import React from 'react';
import { IDoubleRing } from '../types';
import "./index.scss";
const DoubleRing = (props: IDoubleRing) => {
    let className = "double-ring";
    if (props.className) {
        className += ` ${props.className}`;
    }
    props.width
    return (
        <div className={className}>
            <div className="loader" style={{ ...props.width ? { width: props.width * 2, height: props.width * 2 } : {} }}>
                <div style={{ borderColor: `${props.color} transparent transparent transparent`, borderWidth: props.width }}></div>
                <div style={{ borderColor: `${props.color} transparent transparent transparent`, borderWidth: props.width }}></div>
            </div>
        </div>
    )
}

export default DoubleRing
