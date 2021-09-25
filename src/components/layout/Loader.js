import React from "react";
import loaderGif from "../../assets/images/loader.gif"

const Loader = ({triggerLoader}) => {
    return triggerLoader && <img src={loaderGif} alt="loader-gif" className="loader-gif"/>
};

export default Loader;