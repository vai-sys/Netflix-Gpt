import React from "react";
import SocialProfileClass from "./SocialProfileClass";

const ProfileUserFunctional = ({ data }) => {
  const { name, avatar_url, bio } = data;

  return (
    <div className="profile-user-card">
      {/* <img
        className="profile-user-img"
        src={avatar_url}
        alt={name}
        title={name}
      /> */}
      <p className="profile-user-bio">{bio}</p>
      <SocialProfileClass/>
    </div>
  );
};

export default ProfileUserFunctional;




