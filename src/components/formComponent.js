import React, { useState } from "react";
import { ReactComponent as BlurFilter } from "../assets/blurFilter.svg"
import Select from 'react-select'
import { courseOptions } from '../assets/courseCodes.js'

export default function FormComponent() {

    const [status, setStatus] = useState("form-open");

    function toggleStatus(status) {

        if (status === "form-open") {

            setStatus("form-closed")

        } else {

            setStatus("form-open")
        }
    }

    console.log(courseOptions)
    return (

        <div className="bigblob">
            <div className={"blob " + status} onClick={() => toggleStatus(status)}></div>
            <div className={"glob " + status} style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
                <div style={{ display: "flex", justifyContent: "center", marginTop: "4vh" }}>
                    <div style={{ display: "flex", flexDirection: "column", width: "32vw" }}>
                        <div style={{ display: "flex", justifyContent: "center", marginTop: "1.5vh" }}>
                            <p style={{ zIndex: "10", color: "white", fontSize: "5vw" }}> Subject </p>
                        </div>
                        <div style={{ display: "flex", justifyContent: "center", marginTop: "2vh", marginBottom: "2vh" }}>
                            <Select options={courseOptions} styles={{container: (provided) => ({...provided, width: "80%"}), control: (provided) => ({...provided, height: "9vh", borderRadius: "2vh"})}}/>
                            {/* <div style={{ borderRadius: "2vh", width: "80%", height: "9vh", backgroundColor: "white" }}></div> */}
                        </div>
                        <div style={{ display: "flex", justifyContent: "center", marginTop: "2vh", marginBottom: "2vh" }}>
                            <div style={{ borderRadius: "5vh/50%", width: "10vh", height: "10vh", backgroundColor: "white" }}></div>
                        </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", width: "32vw" }}>
                        <div style={{ display: "flex", justifyContent: "center", marginTop: "1.5vh"}}>
                            <p style={{ zIndex: "10", color: "white", fontSize: "5vw" }}> Course Code </p>
                        </div>
                        <div style={{ display: "flex", justifyContent: "center", marginTop: "2vh", marginBottom: "2vh" }}>
                            <div style={{ borderRadius: "2vh", width: "80%", height: "9vh", backgroundColor: "white" }}></div>
                        </div>
                        <div style={{ display: "flex", justifyContent: "center", marginTop: "2vh", marginBottom: "2vh" }}>
                            <div style={{ borderRadius: "5vh/50%", width: "10vh", height: "10vh", backgroundColor: "white" }}></div>
                        </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", width: "32vw" }}>
                        <div style={{ display: "flex", justifyContent: "center", marginTop: "1.5vh"}}>
                            <p style={{ zIndex: "10", color: "white", fontSize: "5vw" }}> Year </p>
                        </div>
                        <div style={{ display: "flex", justifyContent: "center", marginTop: "2vh", marginBottom: "2vh" }}>
                            <div style={{ borderRadius: "2vh", width: "80%", height: "9vh", backgroundColor: "white" }}></div>
                        </div>
                        <div style={{ display: "flex", justifyContent: "center", marginTop: "2vh", marginBottom: "2vh" }}>
                            <div style={{ borderRadius: "5vh/50%", width: "10vh", height: "10vh", backgroundColor: "white" }}></div>
                        </div>
                    </div>
                </div>

                <div style={{marginTop: "2vh", display: "flex", width: "90vw", height: "9vh", backgroundColor: "white", borderRadius: "5vh/50%"}}></div>

            </div>

            <BlurFilter />

        </div>





    )
}