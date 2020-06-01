import React, { useState } from "react";
import {ReactComponent as BlurFilter} from "../assets/blurFilter.svg"

export default function FormComponent() {

    const [status, setStatus] = useState("form-open");

    function toggleStatus(status) {

        if (status === "form-open") {

            setStatus("form-closed")

        } else {

            setStatus("form-open")
        }
    }

    return (

        <div className="bigblob">
            <div className={"blob " + status} onClick={() => toggleStatus(status)}></div>
            <div className={"glob " + status}></div>

            <BlurFilter />            

        </div>





    )
}