import React from "react";
import "./Sidebar.scss";
import LineStyleIcon from "@mui/icons-material/LineStyle";
import TimelineIcon from "@mui/icons-material/Timeline";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import StorefrontIcon from "@mui/icons-material/Storefront";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import BarChartIcon from "@mui/icons-material/BarChart";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import DynamicFeedIcon from "@mui/icons-material/DynamicFeed";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import ReportIcon from "@mui/icons-material/Report";
import { Link } from "react-router-dom";

export default function Sidebar() {
   return (
      <div className="sidebar">
         <div className="Wrapper">
            <div className="Menu">
               <h3 className="Title">Dashboard</h3>
               <ul className="List">
                  <Link to={"/"} className="link">
                     <li className="ListItem active">
                        <LineStyleIcon className="Icon" />
                        Home
                     </li>
                  </Link>
                  <li className="ListItem">
                     <TimelineIcon className="Icon" />
                     Analytics
                  </li>
                  <li className="ListItem">
                     <TrendingUpIcon className="Icon" />
                     Sales
                  </li>
               </ul>
            </div>
            <div className="Menu">
               <h3 className="Title">Quick Menu</h3>
               <ul className="List">
                  <Link to={"/users"} className="link">
                     <li className="ListItem">
                        <PeopleOutlineIcon className="Icon" />
                        Users
                     </li>
                  </Link>
                  <Link to={"/newUser"} className="link">
                     <li className="ListItem">
                        <PersonAddAltIcon className="Icon" />
                        New User
                     </li>
                  </Link>
                  <Link to={"/products"} className="link">
                     <li className="ListItem">
                        <StorefrontIcon className="Icon" />
                        Products
                     </li>
                  </Link>
                  <li className="ListItem">
                     <AttachMoneyIcon className="Icon" />
                     Transactions
                  </li>
                  <li className="ListItem">
                     <BarChartIcon className="Icon" />
                     Reports
                  </li>
               </ul>
            </div>
            <div className="Menu">
               <h3 className="Title">Notifications</h3>
               <ul className="List">
                  <li className="ListItem">
                     <MailOutlineIcon className="Icon" />
                     Mail
                  </li>
                  <li className="ListItem">
                     <DynamicFeedIcon className="Icon" />
                     Feedback
                  </li>
                  <li className="ListItem">
                     <ChatBubbleOutlineIcon className="Icon" />
                     Messages
                  </li>
               </ul>
            </div>
            <div className="Menu">
               <h3 className="Title">Staff</h3>
               <ul className="List">
                  <li className="ListItem">
                     <WorkOutlineIcon className="Icon" />
                     Manage
                  </li>
                  <li className="ListItem">
                     <TimelineIcon className="Icon" />
                     Analytics
                  </li>
                  <li className="ListItem">
                     <ReportIcon className="Icon" />
                     Reports
                  </li>
               </ul>
            </div>
         </div>
      </div>
   );
}
