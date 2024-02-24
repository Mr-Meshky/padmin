import React, { useRef } from "react";
import CanvasJSReact from "@canvasjs/react-charts";
//var CanvasJSReact = require('@canvasjs/react-charts');

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

function ChartPage() {
  const chartRef = useRef(null);
  const options = {
    animationEnabled: true,
    title: {
      text: "نمودار توزیعی نسخه اندروید",
      fontFamily: "Vazir",
      fontWeight: 600,
    },

    data: [
      {
        type: "doughnut",
        showInLegend: true,
        indexLabel: "{name}: {y}",
        yValueFormatString: "#,###'%'",
        dataPoints: [
          { name: "اندروید ۱۳", y: 5 },
          { name: "اندروید ۱۲", y: 31 },
          { name: "اندروید ۱۱", y: 38 },
          { name: "اندروید ۱۰", y: 14 },
          { name: "اندروید ۹", y: 10 },
          { name: "نامشخص", y: 2 },
        ],
      },
    ],
  };

  const optionsFirst = {
    animationEnabled: true,
    title: {
      text: "نمودار دانلود برنامه در سال 2023",
      fontFamily: "Vazir",
      fontWeight: 600,
    },
    axisX: {
      valueFormatString: "MMM",
    },

    data: [
      {
        yValueFormatString: "دانلود ####",
        xValueFormatString: "MMMM",
        type: "spline",
        dataPoints: [
          { x: new Date(2023, 0), y: 120 },
          { x: new Date(2023, 1), y: 200 },
          { x: new Date(2023, 2), y: 129 },
          { x: new Date(2023, 3), y: 287 },
          { x: new Date(2023, 4), y: 99 },
          { x: new Date(2023, 5), y: 12 },
          { x: new Date(2023, 6), y: 299 },
          { x: new Date(2023, 7), y: 284 },
          { x: new Date(2023, 8), y: 1023 },
          { x: new Date(2023, 9), y: 383 },
          { x: new Date(2023, 10), y: 247 },
          { x: new Date(2023, 11), y: 284 },
        ],
      },
    ],
  };

  return (
    <div className="overflow-auto h-screen pb-24 pt-2 pr-2 pl-2 md:pt-0 md:pr-0 md:pl-0">
      <div className="flex flex-col flex-wrap sm:flex-row ">
        <div className="container mx-auto px-4 sm:px-8 max-w-8xl">
          <CanvasJSChart ref={chartRef} options={optionsFirst} />
          <div className="my-4"></div>
          <CanvasJSChart ref={chartRef} options={options} />
        </div>
      </div>
    </div>
  );
}

export default ChartPage;
