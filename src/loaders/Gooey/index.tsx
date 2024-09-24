import React from "react";
import "./index.scss";

const Gooey = ({ color, className, }: { color?: string, className?: string }) => {
    let getClass = "gooey";
    if (className) {
        getClass += ` ${className}`;
    }
    return (
        <div className={getClass}>
            <div className="loader">
                <span className="dot" style={{ backgroundColor: color }}></span>
                <div className="dots">
                    <span style={{ backgroundColor: color }}></span>
                    <span style={{ backgroundColor: color }}></span>
                    <span style={{ backgroundColor: color }}></span>
                </div>
            </div>
        </div>
    )
}

export default Gooey
