import React from 'react';
import "./index.scss";
import { ILoader } from '../types';
const SpinnerHalf = (props: { borderWidth?: number | string } & ILoader) => {
    let className = "spinner-half";
    if (props.className) {
        className += ` ${props.className}`;
    }
    return (
        <div className={className}>
            <div className="loader">
                <div style={{
                    borderTopColor: props.color,
                    width: props.width,
                    height: props.width,
                    borderWidth: props.borderWidth,
                }}></div>
                <div style={{
                    borderTopColor: props.color,
                    width: props.width,
                    height: props.width,
                    borderWidth: props.borderWidth,
                }}></div>
            </div>
        </div>
    )
}

export default SpinnerHalf
