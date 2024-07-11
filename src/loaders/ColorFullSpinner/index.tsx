import React from 'react';
import { IColorFullSpinner } from '../types';
import "./index.scss";
const ColorFullSpinner = (props: IColorFullSpinner) => {
    let className = "color-full-spinner";
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
                    ...props.colors?.length === 4 ?
                        {
                            borderTopColor: props.colors[0],
                            borderRightColor: props.colors[1],
                            borderBottomColor: props.colors[2],
                            borderLeftColor: props.colors[3],
                        }
                        :
                        {}
                }}
            >
            </div>
        </div>
    )
}

export default ColorFullSpinner
