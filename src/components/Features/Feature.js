import React from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import "./Feature.scss";

export default function Feature({ title, money, rate, arrowUpIcon }) {
   return (
      <div className="featureItem">
         <span className="featureTitle">{title}</span>
         <div className="featureContainer">
            <span className="featureMoney">{money}</span>
            <span className="featureRate">
               {rate}
               {arrowUpIcon ? (
                  <ArrowUpwardIcon className="featureIcon" />
               ) : (
                  <ArrowDownwardIcon className="featureIcon negative" />
               )}
            </span>
         </div>
         <span className="featureSub">Compared to last month</span>
      </div>
   );
}
