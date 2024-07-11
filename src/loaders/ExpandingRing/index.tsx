import React from 'react';
import { IExpandingRing } from '../types';
import "./index.scss";
const ExpandingRing = (props: IExpandingRing) => {
    let className = "expanding-ring";
    if (props.className) {
        className += ` ${props.className}`;
    }
    return (
        <div className={className}>
            <div className="loader" style={{ width: props.width, height: props.width }}>
                <div style={{width: props.width, height: props.width, borderColor: props.color, borderWidth: props.borderWidth}}></div>
                <div style={{width: props.width, height: props.width, borderColor: props.color, borderWidth: props.borderWidth}}></div>
            </div>
        </div>
    )
}

export default ExpandingRing
