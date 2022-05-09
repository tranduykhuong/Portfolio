import React from "react";
import classes from './Skills.module.css'

const Level = (props) => {
    return (
        <div className={classes.level}>
            <div className={classes.infor}>
                <h2>{props.name}</h2>
            </div>
            <div className={classes.process}>
                <div className={classes.coverProcessed} style={{ width: props.percent + '%' }}>
                    <div className={classes.processed + " " + (props.animation ? classes.animationProcess : "")} >
                        <span>{props.percent}%</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Level;