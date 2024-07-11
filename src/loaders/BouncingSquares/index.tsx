import React from 'react';
import { ILoader } from '../types';
import "./index.scss";
const BouncingSquares = (props: ILoader) => {
    let className = "bouncing-squares";
    if (props.className) {
        className += ` ${props.className}`;
    }
    return (
        <div className={className}>
            <div
                className="loader"
            >
                <div style={{ backgroundColor: props.color, width: props.width, height: props.width }}></div>
                <div style={{ backgroundColor: props.color, width: props.width, height: props.width }}></div>
                <div style={{ backgroundColor: props.color, width: props.width, height: props.width }}></div>
            </div>
        </div>
    )
}

export default BouncingSquares
