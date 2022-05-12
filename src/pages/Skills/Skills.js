import React from "react";
import { useEffect, useRef, useState } from "react";
import Level from "./Level";
import classes from './Skills.module.css'

function Skills() {
    const [LevelsAction, setLevels] = useState(false);
    let topLevels = useRef();

    useEffect(() => {
        const handleScroll = () => {
            if (topLevels.current.getBoundingClientRect().top < window.innerHeight) {
                setLevels(true);
            }
            else setLevels(false);
        }

        window.addEventListener('scroll', handleScroll)

        // cleanup function
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    return (
        <div className={classes.skills}>
            <div className={classes.title}>Học tập</div>
            <div className={classes.study}>
                <p> <span>School: </span> University of Science - VNUHCM</p>
                <p> <span>BSc:    </span> Software engineering</p>
                <p> <span>GPA:    </span> 3.7 / 4.0</p>
                <p> <span>Courses:    </span> Computer Networking, Datastructer And Alogorithms,
                    Object Orience Programing, Computer System, Database, Operate System</p>
            </div>

            <div className={classes.title}>Language Programing</div>
            <div className={classes.levels}>
                <div className={classes.html5} >
                    <img src="./img/html5.png" alt="HTML5" />
                    <div style={{ flex: '1' }}><Level name='HTML5' percent='75' animation={LevelsAction} /></div>
                </div>

                <div className={classes.css3} ref={topLevels}>
                    <img src="./img/css3.png" alt="css3" />
                    <div style={{ flex: '1' }}><Level name='CSS3' percent='65' animation={LevelsAction} /></div>
                </div>

                <div className={classes.js}>
                    <img src="./img/js.png" alt="js" />
                    <div style={{ flex: '1' }}><Level name='JavaScript' percent='60' animation={LevelsAction} /></div>
                </div>

                <div className={classes.reactjs}>
                    <img src="./img/reactjs.png" alt="reactjs" />
                    <div style={{ flex: '1' }}><Level name='ReactJS' percent='70' animation={LevelsAction} /></div>
                </div>

                <div className={classes.tailwind}>
                    <img src="./img/tailwind.png" alt="tailwind" />
                    <div style={{ flex: '1' }}><Level name='TailwindCSS' percent='55' animation={LevelsAction} /></div>
                </div>
            </div>

            {/* UI/UX */}
            <div className={classes.title}>Design UI/UX</div>
            <div className={classes.uiux}>
                <div className={classes.itemChart}>
                    <div className={classes.piechart + ' ' + classes.figma}>
                        <div className={classes.logoFigma}>
                            <img src="./img/figma.png" alt="figma" />
                        </div>
                    </div>
                    <p>Figma</p>
                </div>

                <div className={classes.itemChart}>
                    <div className={classes.piechart + ' ' + classes.photoshop}>
                        <div className={classes.logoPhotoshop}>
                            <img src="./img/photoshop.png" alt="photoshop" />
                        </div>
                    </div>
                    <p>Photoshop</p>
                </div>
            </div>

            {/* Soft skills */}
            <div className={classes.title}>Kỹ năng mềm</div>
            <div className={classes.softskills}>
                <div className={classes.softskillItem}>
                    <div className={classes.teamwork}>
                        <img src="./img/teamwork.png" alt="teamwork" />
                        <h4>Teamwork</h4>
                    </div>
                    <p>Teamwork là một kỹ năng rất cần thiết trong cuộc sống nói chung và lĩnh vực Công nghệ
                        thông tin nói riêng. Trong quá trình học tập và làm dự án, mình tích cực rèn luyện các
                        phương pháp hoạt động nhóm sao cho hiệu quả và chất lượng.
                    </p>
                </div>

                <div className={classes.softskillItem}>
                    <div className={classes.presentation}>
                        <img src="./img/presentation.png" alt="presentation" />
                        <h4>Presentation</h4>
                    </div>
                    <p>Kỹ năng thuyết trình, trình bày là một trong những kỹ năng cần thiết trong mọi lĩnh vực. 
                        May mắn, mình đã được tham gia các hoạt động Đoàn, Đội từ những năm Phổ thông nên bản thân
                        đã rèn luyện được các yếu tố cần thiết và tự tin hơn khi đứng trước đám đông.
                    </p>
                </div>

                <div className={classes.softskillItem}>
                    <div className={classes.leadership}>
                        <img src="./img/leadership.png" alt="leadership" />
                        <h4>Leadership</h4>
                    </div>
                    <p>Trong quá trình học tập từ những năm Phổ thông, mình một lần nữa may mắn giữ chức vụ lớp 
                        trưởng 9 năm nên đã tích lũy được một số kinh nghiệm nhất định trong quản lý tập thể. 
                        Ở Đại học với sự nhiệt huyết, mình tích cực đóng vai trò Team Leader trong các project.
                    </p>
                </div>

            </div>
        </div>
    );
}

export default Skills;