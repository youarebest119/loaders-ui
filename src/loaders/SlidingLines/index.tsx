import React from 'react';
import "./index.scss";
import { ILoader } from '../types';
const SlidingLines =  (props: ILoader) => {
    let className = "sliding-lines";
    if (props.className) {
        className += ` ${props.className}`;
    }
    return (
        <div className={className}>
            <div className="loader">
                <div style={{ backgroundColor: props.color, width: props.width, height: typeof props.width === "number" ? props.width * 4 : "32px", margin: typeof props.width === "number" ? `0 ${props.width * 2}px` : "0 15px" }}></div>
                <div style={{ backgroundColor: props.color, width: props.width, height: typeof props.width === "number" ? props.width * 4 : "32px", margin: typeof props.width === "number" ? `0 ${props.width * 2}px` : "0 15px" }}></div>
                <div style={{ backgroundColor: props.color, width: props.width, height: typeof props.width === "number" ? props.width * 4 : "32px", margin: typeof props.width === "number" ? `0 ${props.width * 2}px` : "0 15px" }}></div>
            </div>
        </div>
    )
}

export default SlidingLines
