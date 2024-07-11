import React from 'react';
import "./index.scss";
import { ILoader } from '../types';
const Spinner = (props: { dullColor?: string, borderWidth?: number | string } & ILoader) => {
    let className = "spinner";
    if (props.className) {
        className += ` ${props.className}`;
    }
    return (
        <div className={className}>
            <div className="loader"
                style={{
                    borderColor: props.dullColor,
                    borderTopColor: props.color,
                    width: props.width,
                    height: props.width,
                    borderWidth: props.borderWidth,
                }}
            >
            </div>
        </div>
    )
}

export default Spinner
