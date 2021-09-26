import React from "react";
import loaderGif from "../../assets/images/loader.gif"
import {useSelector} from "react-redux";

const Loader = () => {
    const {loader} = useSelector(store => store.loaderStore);
    return loader && <img src={loaderGif} alt="loader-gif" className="loader-gif"/>
};

export default Loader;