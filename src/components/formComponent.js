import React, { useState } from "react";
import { ReactComponent as BlurFilter } from "../assets/blurFilter.svg"
import { ReactComponent as CloseIcon } from "../assets/close.svg"
import { ReactComponent as SearchIcon } from "../assets/search.svg"
import Select from 'react-select'
import { courseList, courseOptions } from '../assets/courseCodes.js'

export default function FormComponent() {

    const [status, setStatus] = useState("form-open");

    function toggleStatus(status) {

        if (status === "form-open") {

            setStatus("form-closed")

        } else {

            setStatus("form-open")
        }
    }

    // Calculate Current year
    let currentYear = new Date().getFullYear();

    let dateOptions = []
    let dates = []

    for (let i = currentYear; i > currentYear - 5; i--) {

        dateOptions.unshift({ value: i, label: i })
        dates.unshift(i)

    }

    return (

        <div className="bigblob">
            <div className={"blob " + status} onClick={() => toggleStatus(status)}>
                <div className={status + "-icon-margin"} style={{ display: "flex", justifyContent: "center" }}>
                    {status === "form-open" ? <CloseIcon /> : <SearchIcon />}
                </div>
            </div>
            <div className={"glob " + status} style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
                <div className={status === "form-closed" ? "hidden-class" : ""} style={{ display: "flex", justifyContent: "center", marginTop: "4vh" }}>
                    <div style={{ display: "flex", flexDirection: "column", width: "32vw" }}>
                        <div style={{ display: "flex", justifyContent: "center", marginTop: "1.5vh" }}>
                            <p style={{ zIndex: "10", color: "white", fontSize: "5vw" }}> Subject </p>
                        </div>
                        <div style={{ display: "flex", justifyContent: "center", marginTop: "2vh", marginBottom: "2vh" }}>
                            <select defaultValue="CS" style={{ fontSize: "4vw", border: "none", padding: "2vw", borderRadius: "2vh", width: "80%", height: "9vh", backgroundColor: "white" }}>
                                {courseList.map(course => <option value={course}>{course}</option>)}
                            </select>
                            {/* <Select options={courseOptions} styles={{ container: (provided) => ({ ...provided, width: "80%" }), control: (provided) => ({ ...provided, height: "9vh", borderRadius: "2vh" }) }} /> */}
                        </div>
                        <div style={{ display: "flex", justifyContent: "center", marginTop: "2vh", marginBottom: "2vh" }}>
                            <div style={{ borderRadius: "5vh/50%", width: "10vh", height: "10vh", backgroundColor: "white" }}></div>
                        </div>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", width: "32vw" }}>
                        <div style={{ display: "flex", justifyContent: "center", marginTop: "1.5vh" }}>
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
                        <div style={{ display: "flex", justifyContent: "center", marginTop: "1.5vh" }}>
                            <p style={{ zIndex: "10", color: "white", fontSize: "5vw" }}> Year </p>
                        </div>
                        <div style={{ display: "flex", justifyContent: "center", marginTop: "2vh", marginBottom: "2vh" }}>
                            {/* <Select options={dateOptions} styles={{ container: (provided) => ({ ...provided, width: "80%" }), control: (provided) => ({ ...provided, height: "9vh", borderRadius: "2vh" }) }} /> */}
                            <select defaultValue={currentYear} style={{ fontSize: "4vw", border: "none", padding: "2vw", borderRadius: "2vh", width: "80%", height: "9vh", backgroundColor: "white" }}>
                                {dates.map(date => <option value={date}>{date}</option>)}
                            </select>
                        </div>
                        <div style={{ display: "flex", justifyContent: "center", marginTop: "2vh", marginBottom: "2vh" }}>
                            <div style={{ borderRadius: "5vh/50%", width: "10vh", height: "10vh", backgroundColor: "white" }}></div>
                        </div>
                    </div>
                </div>

                <div style={{ marginTop: "2vh", display: "flex", width: "90vw", height: "9vh", backgroundColor: "white", borderRadius: "5vh/50%" }}></div>

            </div>

            {/* <BlurFilter /> */}

        </div>





    )
}