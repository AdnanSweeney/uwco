import React, { useState } from "react";
import { ReactComponent as BlurFilter } from "../assets/blurFilter.svg"

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
            <div className={"glob " + status} style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <div style={{ display: "flex", flexDirection: "column", marginTop: "3vh", width: "32vw" }}>
                        <div style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}>
                            <p style={{ zIndex: "10", color: "white", fontSize: "1.3em" }}> Subject </p>
                        </div>
                        <div style={{ display: "flex", justifyContent: "center", marginTop: "10px", marginBottom: "10px" }}>
                            <div style={{ borderRadius: "2vh", width: "80%", height: "10vh", backgroundColor: "white" }}></div>
                        </div>
                        <div style={{ display: "flex", justifyContent: "center", marginTop: "10px", marginBottom: "10px" }}>
                            <div style={{ borderRadius: "5vh/50%", width: "10vh", height: "10vh", backgroundColor: "white" }}></div>
                        </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", marginTop: "3vh", width: "32vw" }}>
                        <div style={{ display: "flex", justifyContent: "center", marginTop: "10px"}}>
                            <p style={{ zIndex: "10", color: "white", fontSize: "1.3em" }}> Course Code </p>
                        </div>
                        <div style={{ display: "flex", justifyContent: "center", marginTop: "10px", marginBottom: "10px" }}>
                            <div style={{ borderRadius: "2vh", width: "80%", height: "10vh", backgroundColor: "white" }}></div>
                        </div>
                        <div style={{ display: "flex", justifyContent: "center", marginTop: "10px", marginBottom: "10px" }}>
                            <div style={{ borderRadius: "5vh/50%", width: "10vh", height: "10vh", backgroundColor: "white" }}></div>
                        </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", marginTop: "3vh", width: "32vw" }}>
                        <div style={{ display: "flex", justifyContent: "center", marginTop: "10px"}}>
                            <p style={{ zIndex: "10", color: "white", fontSize: "1.3em" }}> Year </p>
                        </div>
                        <div style={{ display: "flex", justifyContent: "center", marginTop: "10px", marginBottom: "10px" }}>
                            <div style={{ borderRadius: "2vh", width: "80%", height: "10vh", backgroundColor: "white" }}></div>
                        </div>
                        <div style={{ display: "flex", justifyContent: "center", marginTop: "10px", marginBottom: "10px" }}>
                            <div style={{ borderRadius: "5vh/50%", width: "10vh", height: "10vh", backgroundColor: "white" }}></div>
                        </div>
                    </div>
                </div>

                <div style={{marginTop: "10px", display: "flex", width: "90vw", height: "10vh", backgroundColor: "white", borderRadius: "5vh/50%"}}></div>

            </div>

            <BlurFilter />

        </div>





    )
}