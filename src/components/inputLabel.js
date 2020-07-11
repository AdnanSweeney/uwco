import React, { useState } from "react";
import '../App.css';

export default function InputLabel(props) {

    return (
        <div className="centered-flex-container even-container-margin" style={{ marginBottom: 0}}>
            <p className="input-label white-text"> {props.label} </p>
        </div>
    )
}