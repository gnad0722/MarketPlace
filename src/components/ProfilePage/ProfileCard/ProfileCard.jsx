import React from "react";
import Avatar from "./Avatar";
import Information from "./Information";
import FollowAndRating from "./FollowAndRating";
function ProfileCard() {
  return (
    <div className="profile-card">
      <Avatar />
      <Information/>
      <FollowAndRating/>
    </div>
  );
}
export default ProfileCard;
