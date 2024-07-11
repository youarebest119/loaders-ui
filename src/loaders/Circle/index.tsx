import React from 'react';
import { ILoader } from '../types';
import "./index.scss";

const Circle = (props: ILoader) => {
    let className = "circle";
    if (props.className) {
        className += ` ${props.className}`;
    }
    return (
        <div className={className}>
            <div
                className="loader"
                style={{
                    width: props.width,
                    height: props.width,
                    borderTopColor: props.color,
                }}
            />
        </div>
    )
}

export default Circle
