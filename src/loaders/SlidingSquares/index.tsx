import React from 'react';
import "./index.scss";
import { ILoader } from '../types';
const SlidingSquares = (props: ILoader) => {
    let className = "sliding-squares";
    if (props.className) {
        className += ` ${props.className}`;
    }
    return (
        <div className={className}>
            <div className="loader">
                <div style={{ backgroundColor: props.color, width: props.width, height: props.width, margin: typeof props.width === "number" ? `0 ${props.width * 0.4}px` : "0 8px" }}></div>
                <div style={{ backgroundColor: props.color, width: props.width, height: props.width, margin: typeof props.width === "number" ? `0 ${props.width * 0.4}px` : "0 8px" }}></div>
                <div style={{ backgroundColor: props.color, width: props.width, height: props.width, margin: typeof props.width === "number" ? `0 ${props.width * 0.4}px` : "0 8px" }}></div>
            </div>
        </div>
    )
}

export default SlidingSquares
