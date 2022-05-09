import React from "react";
import classes from './Extracurricular.module.css'

function Extracurricular() {
    return (
        <div className={classes.extracurricular}>
            <div className={classes.title}>Ngoại khóa</div>
            <div className={classes.extraItem}>
                <div className={classes.itemHeader}>
                    <img className={classes.imgTVTS} src="./img/logoTVTS.png" alt="logoTVTS" />
                    <h4>Câu lạc bộ Tư vấn tuyển sinh trường Đại học Khoa học Tự nhiên - ĐHQGHCM</h4>
                </div>
                <p>Là một thành viên câu lạc bộ Tư vấn tuyển sinh trường Đại học Khoa học Tự nhiên, mình
                    mong muốn được góp sức giúp đỡ các bạn học sinh đang chuẩn bị hành trang cho con đường
                    tương lai của mình. Tư vấn, hỗ trợ các bạn có cái nhìn đúng đắn và định hướng tốt hơn
                    cho bản thân.
                </p>
            </div>
            <div className={classes.extraItem}>
                <div className={classes.itemHeader}>
                    <img className={classes.imgTVTS} src="./img/YO.png" alt="YO" />
                    <h4>Young Opportunities - Cơ hội đi ra thế giới dành cho người trẻ</h4>
                </div>
                <p>Với vai trò Đại sứ truyền thông cho dự án Young Opportunities, tôi tích cực trau dồi thêm
                    các kỹ năng mềm để hoàn thiện bản thân. Ngoài kiến thức chuyên môn thì kỹ năng
                    hoạt động nhóm, kỹ năng quản lý thời gian, quản lý dự án... cũng không kém phần quan trọng.
                </p>
            </div>

            <div className={classes.title}>Cuộc thi và chứng nhận</div>
            <div className={classes.contestList}>
                <div className={classes.contestItem}>
                    <h4>Top 14 - Hackathon Gotcha Corona 2020 organized by KMS Technology</h4>
                    <p>Gotcha Corona là một cuộc thi thuộc lĩnh vực Công nghệ thông tin. Chinh phục 24 HOUR CODING
                        CHALLENGE - GOTCHA CORONA từ KMS bằng cách sử dụng khả năng lập trình để tiêu diệt
                        nhiều Corona Virus nhất</p>
                </div>

                <div className={classes.contestItem}>
                    <h4>Completing Five-day for tester</h4>
                    <p>Five days for tester được tổ chức bởi iTMS Coaching. Chương trình cung cấp các kiến thức cơ
                        bản để trở thành một tester cùng các kỹ thuật kiểm thử phần mềm từ thủ công đến tự động.
                    </p>
                </div>

                <div className={classes.contestItem}>
                    <h4>Weekly contest - Leetcode</h4>
                    <p>LeetCode là một nền tảng giúp người dùng nâng cao kỹ năng lập trình thông qua các câu hỏi tư
                        duy. Tham gia các cuộc thi và giải các bài toán trên Leetcode để rèn luyện khả năng tư duy logic
                        và thuật toán cho bản thân.
                    </p>
                </div>

                <div className={classes.contestItem}>
                    <h4>Certificate for successfully completing Code Innovation Series Workshop organized by GitHub</h4>
                    <p>Code Innovation Series Workshop được tổ chức bởi GitHub nhằm cung cấp mã nguồn
                        mở đến cộng đồng sau khi đổi mới.
                    </p>
                </div>

                <div className={classes.contestItem}>
                    <h4>Thách Thức 2022 - HCMUS</h4>
                    <p>Thách thức là cuộc thi học thuật đầu tiên về Công nghệ Thông tin của các trường đại học trên địa bàn TP.HCM
                        được tổ chức bởi Khoa Công nghệ thông tin Trường Đại học Khoa học Tự nhiên - ĐHQGHCM. 
                    </p>
                </div>
            </div>

        </div>
    );
}

export default Extracurricular;