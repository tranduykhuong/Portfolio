import React from 'react';
import PropTypes from 'prop-types';
import classes from './Slideshow.module.css'
import { useState, useEffect } from 'react';

Slideshow.propTypes = {

};

let timer;

function Slideshow(props) {
    const [idx, setIdx] = useState(0)

    useEffect(() => {
        timer = setInterval(() => {
            setIdx(prevState => (prevState + 1) % 3)
        }, 5000)
        return () => clearInterval(timer)
    }, [])

    const handleClickDot = (idx) => {
        setIdx(idx)
        clearInterval(timer)
        timer = setInterval(() => {
            setIdx(prevState => (prevState + 1) % 3)
        }, 5000)
        return () => clearInterval(timer)
    }

    return (
        <div>
            <div className={classes.slideshowContainer}>
                <div className={classes.slideshowMain}
                    style={{transform: 'translateX(-' + idx * 100 +'%)'}}
                    >
                    <div className={classes.slideItem}>
                        <div className={classes.slideItemContent}>
                            <img src="../img/Albert.jpg" alt="Albert" className={classes.slideItemImg} />
                            <div className={classes.slideItemText}>
                                <h3>Albert Einstein</h3>
                                <p>"Đừng phấn đấu để thành công mà hãy phấn đấu để mình có ích"</p>
                            </div>
                        </div>
                    </div>

                    <div className={classes.slideItem}>
                        <div className={classes.slideItemContent}>
                            <img src="../img/JimRohn.jpeg" alt="Jim Rohn" className={classes.slideItemImg} />
                            <div className={classes.slideItemText}>
                                <h3>Jim Rohn</h3>
                                <p>"Nếu bạn không dám mạo hiểm với những điều không bình thường,
                                    bạn sẽ mãi chôn chân với những điều bình thường."</p>
                            </div>
                        </div>
                    </div>

                    <div className={classes.slideItem}>
                        <div className={classes.slideItemContent}>
                            <img src="../img/AnatoleFrance.jpg" alt="Anatole France" className={classes.slideItemImg} />
                            <div className={classes.slideItemText}>
                                <h3>Anatole France</h3>
                                <p>"Để đạt được những điều vĩ đại, chúng ta không chỉ hành
                                    động mà còn phải mơ ước, không chỉ có kế hoach mà còn phải tin tưởng."</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={classes.dots}>
                <span className={classes.dot + " " + (idx === 0 ? classes.active : "")}
                    onClick={() => handleClickDot(0)}></span>
                <span className={classes.dot + " " + (idx === 1 ? classes.active : "")}
                    onClick={() => handleClickDot(1)}></span>
                <span className={classes.dot + " " + (idx === 2 ? classes.active : "")}
                    onClick={() => handleClickDot(2)}></span>
            </div>
        </div>
    );
}

export default Slideshow;