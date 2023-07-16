import React from "react";
import Features from "../../components/Features/Features";
import Chart from "../../components/Chart/Chart";
import { xAxisData } from "../../datas";
import WidgetSm from "../../components/Widgets/WidgetSm/WidgetSm";
import WidgetLg from "../../components/Widgets/WidgetLg/WidgetLg";
import "./Home.scss";

export default function Home() {
   return (
      <>
         <div className="home">
            <Features />
            <Chart title="Month Sale" data={xAxisData} dataKey="Sale" grid />
            <div className="widgets">
               <WidgetSm />
               <WidgetLg />
            </div>
         </div>
      </>
   );
}
