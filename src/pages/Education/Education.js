import React from "react";
import classes from './Education.module.css'

function Education() {
    return (
        <div className={classes.education}>
            <div className={classes.img}>
                <img src="./img/HCMUS.png" alt="HCMUS" />


                <div className={classes.school}>
                    <h5>Vietnam National University Ho Chi Minh city</h5>
                    <p>University of Science</p>
                </div>

                <div className={classes.school}>
                    <h5>Vietnam National University Ho Chi Minh city</h5>
                    <p>University of Science</p>
                </div>

                <div className={classes.majoy}>
                    <p>BSc. Information Technology</p>
                </div>

                <div className={classes.gpa}>
                    <p>GPA: 3.7/ 4.0</p>
                </div>
            </div>

            <div className={classes.courses}>
                <div className={classes.elip}>
                    <div className={classes.elipSub}><p>Courses</p></div>

                    <div className={classes.course1 + ' ' + classes.course}><p>Rrogramming techniques</p></div>
                    <div className={classes.course2 + ' ' + classes.course}><p>Computer Networking</p></div>
                    <div className={classes.course3 + ' ' + classes.course}><p>Datastructer And Alogorithms</p></div>
                    <div className={classes.course4 + ' ' + classes.course}><p>Object Orience Programing</p></div>
                    <div className={classes.course5 + ' ' + classes.course}><p>Database</p></div>
                </div>
            </div>
        </div>
    );
}

export default Education;