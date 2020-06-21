import React, { useState } from "react";
import '../App.css';

export default function CourseTable(props) {

    return (
        <div className="centered-flex-container" >
            <table style={{border: "solid black 1px"}}>
                <thead>
                    <tr>
                        <th>Course</th>
                        <th>Section</th>
                        <th>Time</th>
                        <th>Room</th>
                        <th>Capacity</th>
                        <th>Instructor</th>
                        <th>Campus</th>
                    </tr>
                </thead>
                <tbody>
                    {props.data.map(courseInfo =>
                        <tr>
                            <td> {courseInfo.subject + courseInfo.catalog_number + ": " + courseInfo.title}</td>
                            <td> {courseInfo.section}</td>
                            <td> {courseInfo.classes[0].date.start_time + " - " + courseInfo.classes[0].date.end_time + " " + courseInfo.classes[0].date.weekdays}</td>
                            <td> {courseInfo.classes[0].location.building + courseInfo.classes[0].location.room }</td>
                            <td> {courseInfo.enrollment_total + "/" + courseInfo.enrollment_capacity}</td>
                            <td> {courseInfo.classes[0].instructors[0]}</td>
                            <td> {courseInfo.campus}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}