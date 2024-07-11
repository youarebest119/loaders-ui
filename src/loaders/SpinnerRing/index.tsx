import React from 'react';
import "./index.scss";
import { ILoader } from '../types';
const SpinnerRing = (props: { borderWidth?: number | string } & ILoader) => {
    let className = "spinner-ring";
    if (props.className) {
        className += ` ${props.className}`;
    }
    console.log({props : `${props.color} transparent ${props.color} transparent;`});
    return (
        <div className={className}>
            <div className="loader">
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
