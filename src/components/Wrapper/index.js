import React from "react";
import "./style.css";

const Wrapper = (props) => {
    return (
        <div className="container wrapper">
            {props.children}
        </div>
    )
};

export default Wrapper;