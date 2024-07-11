import React from 'react';
import "./index.scss";
import { ILoader } from '../types';
const FlashSquares = (props: ILoader) => {
    let className = "flash-squares";
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

export default FlashSquares
