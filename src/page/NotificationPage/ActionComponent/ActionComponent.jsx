import React from "react";
import CheckAndSetting from "./CheckAndSetting";
import FilterNotification from "./FilterNotification";
function ActionComponent(){
    return <div className="d-flex flex-column gap-3">
        <CheckAndSetting/>
        <FilterNotification/>
    </div>
}
export default ActionComponent;