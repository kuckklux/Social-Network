import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img src="https://clck.ru/U4EF3" />

        <div className={s.descriptionBlock}>ava + description</div>
      </div>
    </div>
  );
};

export default ProfileInfo;
