import React from 'react';
import "./index.scss";
import { ILoader } from '../types';
const SpinnerRing = (props: { borderWidth?: number | string } & ILoader) => {
    let className = "spinner-ring";
    if (props.className) {
        className += ` ${props.className}`;
    }
    return (
        <div className={className}>
            <div className="loader" style={{
                width: props.width,
                height: props.width,
            }}>
                <div
                    style={{
                        borderColor: `${props.color} transparent ${props.color} transparent`,
                        width: props.width,
                        height: props.width,
                        borderWidth: props.borderWidth,
                    }}
                >
                </div>
            </div>
        </div>
    )
}

export default SpinnerRing
