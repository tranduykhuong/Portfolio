import React from "react";
import classes from './Projects.module.css'

const color = {
    HTML: '#e54d26',
    CSS: '#1b73ba',
    JavaScript: '#d6be00',
    ReactJS: '#0cc2e2',
    TailwindCSS: '#48adb4',
    NodeJS: '#43853d',
    ExpressJS: '#e4cb0f',
    TypeScript: '#3178c6'
}

const TechniqueItem = (props) => {
    const techArr = props.techniqueArr.split(", ");

    return (
        <div className={classes.techniqueList}>
            {
                techArr.map((item, key) => {
                    return (
                        <div className={classes.techniqueItem}
                            style={{ backgroundColor: color[item] }}
                            key={key}
                        >
                            {item}
                        </div>
                    )
                })
            }
        </div>
    )
}

const Project = (props) => {
    return (
        <div className={classes.project}>
            <img src="./img/slst.png" alt="slst" />
            <h2>{props.name}</h2>
            <TechniqueItem techniqueArr={props.technique} />
            <p>{props.description}</p>
            <div className={classes.time}>{props.time}</div>
        </div>
    );
}

export default Project;