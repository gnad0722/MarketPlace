import React,{useState} from "react";
import Header from "../../component/Header";
import ProfileCard from "./ProfileCard/ProfileCard";
import ProfileAction from "./ProfileAction/ProfileAction";
function ProfilePage(){
    return <div>
        <div className="container-profile position-relative">
            <ProfileCard/>
            <ProfileAction/>
        </div>
    </div>
}
export default ProfilePage;