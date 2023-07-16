import React from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { newMembers } from "../../../datas";
import "./WidgetSm.scss";

export default function WidgetSm() {
   return (
      <div className="widgetSm">
         <h3 className="widgetSmTitle">New Join Members</h3>
         <ul className="widgetSmList">
            {newMembers.map((user) => (
               <li className="widgetSmListItem" key={user.id}>
                  <img src={user.img} className="widgetSmImg" alt="user" />
                  <div className="widgetSmUser">
                     <span className="widgetSmUserName">{user.username}</span>
                     <span className="widgetSmUserTitle">{user.title}</span>
                  </div>
                  <button className="widgetSmButton">
                     <VisibilityIcon className="widgetSmIcon" />
                  </button>
               </li>
            ))}
         </ul>
      </div>
   );
}
