import React from "react";
import Header from "../../component/Header";
import ProfileCard from "./ProfileCard/ProfileCard";
import ProfileAction from "./ProfileAction/ProfileAction";
function ProfilePage(){
    return <div>
        <Header/>
        <div className="container-profile">
            <ProfileCard/>
            <ProfileAction/>
        </div>
    </div>
}
export default ProfilePage;