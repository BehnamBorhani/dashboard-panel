import React, { useState } from "react";
import Feature from "./Feature";
import "./Features.scss";

export default function Features() {
   const [features, setFeatures] = useState([
      { title: "Revanue", money: "$2,415", rate: -11.4, arrowUpIcon: false },
      { title: "Sales", money: "$2,415", rate: -1.4, arrowUpIcon: false },
      { title: "Cost", money: "$2,415", rate: +2.4, arrowUpIcon: true },
   ]);

   return (
      <div className="features">
         {features.map((feature) => (
            <Feature {...feature} key={feature.title} />
         ))}
      </div>
   );
}
