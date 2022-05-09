import React from "react";
import Project from "./Project";
import classes from './Projects.module.css'
import styles from '../../components/Layout/Layout.module.css'

function Projects() {
    return (
        <div className={classes.projects}>
            <div className={styles.row}>
                <div className={styles.col + ' ' + styles.l5}>
                    <a href="https://slst-student.netlify.app/" target='_blank' rel="noopener noreferrer">
                        <Project
                            name='SLST - Share documents and test'
                            technique='ReactJS, TypeScript, TailwindCSS, NodeJS, ExpressJS'
                            description='Share document subject and contest have answers subject for student University'
                            time='Spring - 2022'
                        />
                    </a>
                    <a href="https://slst-student.netlify.app/" target='_blank' rel="noopener noreferrer">
                        <Project
                            name='SLST - Share documents and test'
                            technique='HTML, CSS'
                            description='Share document subject and contest have answers subject for student University'
                        />
                    </a>
                    <a href="https://slst-student.netlify.app/" target='_blank' rel="noopener noreferrer">
                        <Project
                            name='SLST - Share documents and test'
                            technique='HTML, CSS'
                            description='Share document subject and contest have answers subject for student University'
                        />
                    </a>
                </div>
                <div className={styles.col + ' ' + styles.l5}>
                    <a href="https://slst-student.netlify.app/" target='_blank' rel="noopener noreferrer">
                        <Project
                            name='SLST - Share documents and test'
                            technique='ReactJS, TypeScript, TailwindCSS, NodeJS, ExpressJS'
                            description='Share document subject and contest have answers subject for student University'
                        />
                    </a>
                    <a href="https://slst-student.netlify.app/" target='_blank' rel="noopener noreferrer">
                        <Project
                            name='SLST - Share documents and test'
                            technique='HTML, CSS'
                            description='Share document subject and contest have answers subject for student University'
                        />
                    </a>
                    <a href="https://slst-student.netlify.app/" target='_blank' rel="noopener noreferrer">
                        <Project
                            name='SLST - Share documents and test'
                            technique='HTML, CSS'
                            description='Share document subject and contest have answers subject for student University'
                        />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Projects;