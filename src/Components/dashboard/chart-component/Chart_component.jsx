"use client";
import ChartTemplate from "./ChartTemplete";
import chartData from "../../../utility/temp/dashboardTemp.json";
import style from "./cart.module.css";
import Image from "next/image";
import arrow from "../../../assets/arrow.png";
import BarChartExample from "../revenue-chart/BarChart";
import PieChart from "./PieChart";
import { Suspense } from "react";
import Loading from "@/app/loading";

const Chart_component = () => {
  return (
    <div>
      <div className={`m-5 h-[83vh] overflow-x-scroll no-scrollbar`}>
        {/* === top bar === */}
        <div className="flex items-center justify-between py-2 mb-5 px-5">
          <span>
            <strong className="block">Today’s Sales</strong>
            <span>Sales Summery</span>
          </span>

          {/* === export file === */}
          <div className="flex items-center justify-center gap-x-2 border-[1px] border-teal-500 rounded-md p-1 px-2">
            <Image
              src={arrow}
              width={20}
              height={20}
              alt="export"
              priority={true}
            />
            <button>Export</button>
          </div>
        </div>

        {/* === single card === */}
        <div className={`${style.responsiveBox}`}>
          {chartData &&
            chartData.map((item, index) => (
              <ChartTemplate item={item} key={index} />
            ))}
        </div>

        {/* === Bar chart & pie chart component === */}
        <div className={`${style.chartResponsive}`}>
          <Suspense fallback={<Loading />}>
            <BarChartExample />
            <PieChart />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default Chart_component;
