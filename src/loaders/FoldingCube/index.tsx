import React from 'react';
import "./index.scss";
import { ILoader } from '../types';
const FoldingCube = (props: ILoader) => {
    let className = "folding-cube";
    if (props.className) {
        className += ` ${props.className}`;
    }
    return (
        <div className={className}>
            <div className="loader" style={{ width: props.width, height: props.width }}>
                <div><div style={{ backgroundColor: props.color }}></div></div>
                <div><div style={{ backgroundColor: props.color }}></div></div>
                <div><div style={{ backgroundColor: props.color }}></div></div>
                <div><div style={{ backgroundColor: props.color }}></div></div>
            </div>
        </div>
    )
}

export default FoldingCube
