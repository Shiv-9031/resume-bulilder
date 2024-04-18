import React from "react";
import style from "./Header.module.css";
import resume from "../../assest/resume.svg";

function Header() {
  return (
    <div className={style.container}>
      <div className={style.left}>
        <p className={style.heading}>
          A <span>Resume</span> that stands out !
        </p>
        <p className={style.heading}>
          Make your own resume.<span>It's free</span>
        </p>
      </div>
      <div className={style.right}>
        <img src={resume} alt="resume" />
      </div>
    </div>
  );
}

export default Header;
