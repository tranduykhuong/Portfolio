import React from "react";
import Project from "./Project";
import classes from "./Projects.module.css";
import "../../grid.css";

function Projects() {
  return (
    <div className={classes.projects}>
      <div className={classes.projectList + " grid row no-gutters"}>
        <div className="col l-6">
          <a
            href="https://slst-student.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Project
              name="SLST - Share documents and test"
              img="./img/slst.png"
              technique="ReactJS, TypeScript, TailwindCSS, NodeJS, ExpressJS"
              description="Share document subject and contest have answers subject for student University"
              time="Spring - 2022"
            />
          </a>
          <a
            href="https://slst-student.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Project
              name="SLST - Share documents and test"
              img="./img/slst.png"
              technique="HTML, CSS"
              description="Share document subject and contest have answers subject for student University"
            />
          </a>
          <a
            href="https://slst-student.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Project
              name="SLST - Share documents and test"
              img="./img/slst.png"
              technique="HTML, CSS"
              description="Share document subject and contest have answers subject for student University"
            />
          </a>
        </div>
        <div className="col l-6">
          <a
            href="https://kimbongspa.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Project
              name="Spa Kim Bông"
              img="./img/spakimbong.png"
              technique="ReactJS, SASS, NodeJS, ExpressJS"
              description="Aesthetics-curling hair Kim Bong support customers to review and book"
              time="May - 2022"
            />
          </a>
          <a
            href="https://slst-student.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Project
              name="SLST - Share documents and test"
              img="./img/spakimbong.png"
              technique="HTML, CSS"
              description="Share document subject and contest have answers subject for student University"
            />
          </a>
          <a
            href="https://slst-student.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Project
              name="SLST - Share documents and test"
              img="./img/spakimbong.png"
              technique="HTML, CSS"
              description="Share document subject and contest have answers subject for student University"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Projects;
