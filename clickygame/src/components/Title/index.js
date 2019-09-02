import React from "react";
import "./style.css";

function Title(props) {
    return <div> <h1 className="title">Clicky Game: Dragon Ball Super Edition </h1>
    <h3>Click a fighter but don't click the same one twice!</h3>
    <h4>Score: {props.score} | Top Score: {props.topScore}</h4>
    </div>
}

export default Title;