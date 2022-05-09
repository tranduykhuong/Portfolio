import React from 'react';
import PropTypes from 'prop-types';
import classes from './Self.module.css'
import Slideshow from './Slideshow/Slideshow';

Self.propTypes = {
    
};

function Self(props) {
    return (
        <div className={classes.self}>
            <div className={classes.introduce}>
                <h2 className={classes.title}>Giới thiệu</h2>
                <p className={classes.introContent}>
                    Tôi hiện tại đang là một sinh viên ngành Công nghệ thông tin, học tập tại
                    Trường Đại học Khoa học Tự nhiên - Đại học Quốc gia TPHCM.
                </p>
                <p className={classes.introContent}>
                    Tôi thích gặp gỡ và kết bạn cũng như thích nghe người khác nói, chia sẻ quan điểm 
                    của mình. Đặc biệt, tôi là người sống hướng ngoại, tôi không muốn làm người khác buồn phiền 
                    hay cảm thấy khó chịu. Thế nên tôi luôn tôn trọng cách sống của mỗi người. Tôi không để mình 
                    nóng giận hay mất bình tỉnh một cách dể dàng và nói lời tục tĩu là không chấp nhận được…
                </p>
            </div>

            <div className={classes.plans}>
                <h2 className={classes.title}>Kế hoạch tương lai</h2>
                <div className={classes.planList}>
                    <div className={classes.planItem}>
                        <h4>Hoàn thành chương trình bậc Đại học</h4>
                        <p>
                            Nổ lực tích lũy kiến thức và tập trung học tập, nghiên cứu các môn học theo 
                            chương trình đào tạo của FIT-HCMUS. Phấn đấu tốt nghiệp với bằng loại Giỏi.
                        </p>
                    </div>
                    <div className={classes.planItem}>
                        <h4>Học tập các kỹ năng</h4>
                        <p>
                            Rèn luyện kỹ năng Teamwork để phù hợp với ngành Công nghệ thông tin - làm việc theo team
                            là chủ yếu. Bên cạnh đó, cần học tập thêm các kỹ năng như giao tiếp, thuyết trình 
                            và xử lý tình huống... thông qua các hoạt động xã hội. Ngoài ra, học tập kỹ năng TeamLeader
                            để có cơ hội tốt hơn trong ngành.
                        </p>
                    </div>
                    <div className={classes.planItem}>
                        <h4>Học Ngoại ngữ</h4>
                        <p>
                            Ngoại ngữ là phần không thể thiếu trong thời đại 4.0 ngày nay, đặc biệt ở lĩnh
                            vực Công nghệ thông tin. Trau dồi ngoại ngữ giúp bản thân tự tin, hội nhập và 
                            đứng vững hơn trong ngành.
                        </p>
                    </div>
                    <div className={classes.planItem}>
                        <h4>Tự học thêm Front-End và Back-End</h4>
                        <p>
                            Với niềm đam mê trong lĩnh vực Công nghệ phần mềm, tôi luôn phấn đấu và tự học
                            thêm các kiến thức liên quan đến Web-app, Mobile như HTML, CSS, JavaScript, React,...
                        </p>
                    </div>
                    <div className={classes.planItem}>
                        <h4>Internship</h4>
                        <p>
                            Thực tập là một cơ hội để mình học hỏi, áp dụng những lý thuyết được học vào thực tế 
                            và làm quen với môi trường làm việc ở công ty. Tôi luôn nỗ lực và đặt mục tiêu thực 
                            tập rất lớn.
                        </p>
                    </div>
                </div>
            </div>

            <div className={classes.quetos}>
                <h2 className={classes.title}>Những câu nói truyền cảm hứng</h2>
                <Slideshow />
            </div>
        </div>
    );
}

export default Self;