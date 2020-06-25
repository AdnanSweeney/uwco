import React, { useState } from "react";
import '../App.css';

export default function CourseTable(props) {

    // Amalgamate all course info for each course (merge multiple lectures / instructors into one object structure)
    // Iterate through and create list of objects for each course that we can display easier in the table below
    // Figure out a way to expand information so that we can see instructors, campus, other information

    return (
        <div className="centered-flex-container">
            <div style={{ width: "80%", minHeight: "60%", marginBottom: "10%"}}>
                <table>
                    <thead>
                        <tr>
                            <th>Course</th>
                            <th>Section</th>
                            <th>Time</th>
                            <th>Room</th>
                            <th>Capacity</th>
                            {/* <th>Instructor</th>
                        <th>Campus</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {props.data.map(courseInfo =>
                            <tr>
                                {/* <td> {courseInfo.subject + courseInfo.catalog_number + ": " + courseInfo.title}</td> */}
                                <td> {courseInfo.subject + courseInfo.catalog_number}</td>
                                <td> {courseInfo.section}</td>
                                <td> {courseInfo.classes[0].date.start_time + " - " + courseInfo.classes[0].date.end_time + " " + courseInfo.classes[0].date.weekdays}</td>
                                <td> {courseInfo.classes[0].location.building + courseInfo.classes[0].location.room}</td>
                                <td> {courseInfo.enrollment_total + "/" + courseInfo.enrollment_capacity}</td>
                                {/* <td> {courseInfo.classes[0].instructors[0]}</td>
                            <td> {courseInfo.campus}</td> */}
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}