import React from "react";
import "./TopBar.scss";
import NotificationsIcon from "@mui/icons-material/Notifications";
import LanguageIcon from "@mui/icons-material/Language";
import SettingsIcon from "@mui/icons-material/Settings";

export default function TopBar() {
   return (
      <div className="topbar">
         <div className="wrapper">
            <div className="left">
               <span className="logo">Dashboard Panel</span>
            </div>

            <div className="right">
               <div className="icon">
                  <NotificationsIcon />
                  <span className="badge">2</span>
               </div>
               <div className="icon">
                  <LanguageIcon />
                  <span className="badge">2</span>
               </div>
               <div className="icon">
                  <SettingsIcon />
               </div>
               <img src="./images/avatar.jpg" alt="avatar" className="avatar" />
            </div>
         </div>
      </div>
   );
}
