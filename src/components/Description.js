import React from "react";
import jsonObj from "./product";
let plainObj = JSON.parse(jsonObj);

function Description(props) {
    return <div>{props.description}</div>
}

export default Description;