import React from 'react';
import { ILoader } from '../types';
import "./index.scss";
const MorphSquare = (props: ILoader) => {
    let className = "morph-square";
    if (props.className) {
        className += ` ${props.className}`;
    }
    return (
        <div className={className}>
            <div className="loader" style={{ width: props.width, height: props.width, backgroundColor: props.color }}></div>
        </div>
    )
}

export default MorphSquare
