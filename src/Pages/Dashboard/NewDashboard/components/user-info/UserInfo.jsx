import React from "react";
import useAuth from "../../../../../hooks/useAuth";
import "./user-info.scss";

const UserInfo = ({ userDetail }) => {
  const { user } = useAuth();
  return (
    <div className="user-info">
      <div className="user-info__img">
        <img src={userDetail.img} alt="" />
      </div>
      <div className="user-info__name">
        <span>{user.displayName}</span>
      </div>
    </div>
  );
};

export default UserInfo;
