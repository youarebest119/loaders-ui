import React from 'react';
import { ILoader } from '../types';
import "./index.scss";
const DoubleBounce = (props: ILoader) => {
    let className = "double-bounce";
    if (props.className) {
        className += ` ${props.className}`;
    }
    return (
        <div className={className}>
            <div className="loader" style={{ width: props.width, height: props.width }}>
                <div style={{ backgroundColor: props.color }}></div>
                <div style={{ backgroundColor: props.color }}></div>
            </div>
        </div>
    )
}

export default DoubleBounce
