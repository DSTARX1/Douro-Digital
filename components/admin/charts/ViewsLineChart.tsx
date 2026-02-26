"use client";

import styles from "@/app/(admin)/admin.module.css";
import { echarts } from "@/lib/echarts-theme";
import { useEChart } from "@/lib/use-echart";
import type { EChartsOption } from "echarts";
import { useMemo } from "react";

interface Props {
  data: { date: string; views: number }[];
  height?: number;
}

export default function ViewsLineChart({ data, height = 320 }: Props) {
  const option = useMemo<EChartsOption>(() => {
    return {
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "cross",
          lineStyle: { color: "rgba(99,102,241,0.3)" },
        },
      },
      grid: { left: 48, right: 16, top: 16, bottom: 32 },
      xAxis: {
        type: "time",
        boundaryGap: ["0%", "0%"] as [string, string],
        axisLabel: {
          formatter: (val: number) => {
            const d = new Date(val);
            return `${d.getDate()}/${d.getMonth() + 1}`;
          },
        },
      },
      yAxis: {
        type: "value",
        minInterval: 1,
      },
      series: [
        {
          type: "line",
          smooth: true,
          symbol: "circle",
          symbolSize: 6,
          showSymbol: false,
          emphasis: { focus: "series", itemStyle: { borderWidth: 2 } },
          lineStyle: { width: 2.5 },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: "rgba(99, 102, 241, 0.35)" },
              { offset: 1, color: "rgba(99, 102, 241, 0.02)" },
            ]),
          },
          data: data.map((d) => [d.date, d.views]),
        },
      ],
    };
  }, [data]);

  const { chartRef } = useEChart(option);

  return (
    <div className={styles.chartCard}>
      <div ref={chartRef} style={{ width: "100%", height }} />
    </div>
  );
}
