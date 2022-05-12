import React from "react";
import { IconFacebook, IconGithub, IconLinked } from "./Icon";
import '../../grid.css'
import classes from './Information.module.css'
import { useState } from "react";

function Information() {
    const [idxHover, setIdxHover] = useState(0);

    return (
        <div className={classes.information + ' grid'}>
            <div className={classes.infor + " row no-gutters"}>
                <div className={classes.inforAvatar + ' col l-2 m-12 '}>
                    <div className={classes.avatar}>
                        <img className={classes.avatarImg} src="./img/avatar.png" alt="avatar" />
                    </div>
                </div>
                <div className={"col l-4 m-12 " + classes.inforUser}>
                    <h2>Trần Duy Khương</h2>
                    <h3>Sinh viên</h3>
                    <div className={classes.icons}>
                        <a className={classes.icon}
                            href="https://www.facebook.com/profile.php?id=100014937931401"
                            target='_blank'
                            rel="noopener noreferrer"
                            onMouseOver={() => setIdxHover(1)}
                            onMouseOut={() => setIdxHover(0)}
                        >
                            <IconFacebook />
                            <div
                                className={classes.iconHoverName + ' ' + (idxHover === 1 ? classes.nonHidden : '')}
                            >
                                <span>Facebook</span>
                            </div>
                        </a>
                        <a className={classes.icon}
                            href="https://www.facebook.com/profile.php?id=100014937931401"
                            target='_blank'
                            rel="noopener noreferrer"
                            onMouseOver={() => setIdxHover(2)}
                            onMouseOut={() => setIdxHover(0)}
                        >
                            <IconLinked />
                            <div
                                className={classes.iconHoverName + ' ' + (idxHover === 2 ? classes.nonHidden : '')}
                            >
                                <span>LinkedIn</span>
                            </div>
                        </a>
                        <a className={classes.icon}
                            href="https://github.com/tranduykhuong"
                            target='_blank'
                            rel="noopener noreferrer"
                            style={{ padding: '2px' }}
                            onMouseOver={() => setIdxHover(3)}
                            onMouseOut={() => setIdxHover(0)}
                        >
                            <IconGithub />
                            <div
                                className={classes.iconHoverName + ' ' + (idxHover === 3 ? classes.nonHidden : '')}
                            >
                                <span>GitHub</span>
                            </div>
                        </a>
                    </div>

                </div>

                <div className="col l-6 m-12 ">
                    <div className={classes.inforContact}>
                        <ul className={classes.contactList}>
                            <li className={classes.contactItem}>
                                <span className={classes.itemTitle}>Email</span>
                                tranduykhuongit@gmail.com
                            </li>
                            <li className={classes.contactItem}>
                                <span className={classes.itemTitle}>Ngày sinh</span>
                                30/06/2002
                            </li>
                        </ul>
                        <ul className={classes.contactList}>
                            <li className={classes.contactItem}>
                                <span className={classes.itemTitle}>Số điện thoại</span>
                                082 *** 4789
                            </li>
                            <li className={classes.contactItem}>
                                <span className={classes.itemTitle}>Địa chỉ</span>
                                Quận 1, TP HCM, Việt Nam
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Information;