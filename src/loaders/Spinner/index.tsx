import React from 'react';
import { LoaderTypes } from "../../utils/types";
import { clsx } from "../../utils/utils";
import "./index.scss";
import { THEME_COLOR } from '../../utils/constant';

const Spinner = ({ color = THEME_COLOR, className, speed = 1, size = 54 }: LoaderTypes) => {
    const spinnerStyle = {
        '--color': color,
        '--animate-speed': `${speed}s`,
        '--size': `${size}px`,
    } as React.CSSProperties;

    return (
        <div className={clsx("spinner", className)} style={spinnerStyle}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
            <div className="bar4"></div>
            <div className="bar5"></div>
            <div className="bar6"></div>
            <div className="bar7"></div>
            <div className="bar8"></div>
            <div className="bar9"></div>
            <div className="bar10"></div>
            <div className="bar11"></div>
            <div className="bar12"></div>
        </div>
    );
};

export default Spinner;
