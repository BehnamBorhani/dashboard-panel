import React from "react";
import Features from "../../components/Features/Features";
import Chart from "../../components/Chart/Chart";
import { xAxisData } from "../../datas";
import "./Home.scss";

export default function Home() {
   return (
      <>
         <div className="home">
            <Features />
            <Chart title="Month Sale" data={xAxisData} dataKey="Sale" grid />
         </div>
      </>
   );
}
