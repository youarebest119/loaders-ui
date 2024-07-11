import React from 'react';
import "./index.scss";
import { ILoader } from '../types';
const ZigZagLine = (props: { maxWidth?: string | number, height?: string | number } & ILoader) => {
    let className = "zig-zag-line";
    if (props.className) {
        className += ` ${props.className}`;
    }
    return (
        <div className={className} style={{ maxWidth: props.maxWidth, }}>
            <div className="loader" style={{ backgroundColor: props.color, width: props.width, height: props.height }}></div>
        </div>
    )
}

export default ZigZagLine
