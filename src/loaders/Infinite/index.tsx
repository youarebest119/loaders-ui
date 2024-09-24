import React, { ReactNode } from 'react'
import "./index.scss";

const Infinite = (props: { width?: string | number, bgStroke?: string, color?: string, defs?: ReactNode, className?: string, }) => {
    let className = "infinite";
    if (props.className) {
        className += ` ${props.className}`;
    }
    return (
        <div className={className}>
            <svg style={{ width: props.width || 64, height: "auto" }} className="ip" viewBox="0 0 256 128" width="256px" height="128px" xmlns="http://www.w3.org/2000/svg">
                {props.defs}
                <g fill="none" stroke-linecap="round" stroke-width="16">
                    <g className="ip__track" stroke={props.bgStroke || "#ddd"}>
                        <path d="M8,64s0-56,60-56,60,112,120,112,60-56,60-56" />
                        <path d="M248,64s0-56-60-56-60,112-120,112S8,64,8,64" />
                    </g>
                    <g stroke-dasharray="180 656">
                        <path className="ip__worm1" stroke={props.color || "#3498db"} stroke-dashoffset="0" d="M8,64s0-56,60-56,60,112,120,112,60-56,60-56" />
                        <path className="ip__worm2" stroke={props.color || "#3498db"} stroke-dashoffset="358" d="M248,64s0-56-60-56-60,112-120,112S8,64,8,64" />
                    </g>
                </g>
            </svg>
        </div>
    )
}

export default Infinite
