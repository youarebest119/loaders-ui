import React from 'react';
import "./index.scss";
import { ILoader } from '../types';
const SkewedSquares = (props: ILoader) => {
    let className = "skewed-squares";
    if (props.className) {
        className += ` ${props.className}`;
    }
    return (
            <div className={className}>
            <div className="loader">
                <div style={{ backgroundColor: props.color, width: props.width, height: props.width, margin: typeof props.width === "number" ? `0 ${props.width * 1.05}px` : "0 4px" }}></div>
                <div style={{ backgroundColor: props.color, width: props.width, height: props.width, margin: typeof props.width === "number" ? `0 ${props.width * 1.05}px` : "0 4px" }}></div>
                <div style={{ backgroundColor: props.color, width: props.width, height: props.width, margin: typeof props.width === "number" ? `0 ${props.width * 1.05}px` : "0 4px" }}></div>
            </div>
        </div>
    )
}

export default SkewedSquares
