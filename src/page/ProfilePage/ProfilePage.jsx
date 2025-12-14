import React,{useState} from "react";
import Header from "../../component/Header";
import ProfileCard from "./ProfileCard/ProfileCard";
import ProfileAction from "./ProfileAction/ProfileAction";
function ProfilePage(){
    const user = JSON.parse(sessionStorage.getItem("user"));
    return <div>
        <div className="container-profile position-relative">
            <ProfileCard user={user}/>
            <ProfileAction user={user}/>
        </div>
    </div>
}
export default ProfilePage;