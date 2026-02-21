"use client";

import { useMemo } from "react";
import type { EChartsOption } from "echarts";
import { useEChart } from "@/lib/use-echart";
import styles from "@/app/(admin)/admin.module.css";

interface Props {
  data: { page: string; views: number }[];
  title?: string;
  height?: number;
}

export default function TopPagesBarChart({ data, title, height = 320 }: Props) {
  const option = useMemo<EChartsOption>(() => {
    // Reverse so highest-views pages are at top of horizontal bar
    const sorted = [...data].reverse();

    return {
      tooltip: {
        trigger: "axis",
        axisPointer: { type: "shadow" },
      },
      grid: { left: 140, right: 24, top: title ? 36 : 16, bottom: 16 },
      ...(title
        ? {
            title: {
              text: title,
              textStyle: { color: "#94a3b8", fontSize: 13, fontWeight: 500 },
              left: 0,
              top: 0,
            },
          }
        : {}),
      yAxis: {
        type: "category" as const,
        data: sorted.map((d) =>
          d.page.length > 20 ? d.page.slice(0, 20) + "..." : d.page
        ),
        axisLabel: { color: "#94a3b8", fontSize: 12 },
      },
      xAxis: {
        type: "value" as const,
        minInterval: 1,
      },
      series: [
        {
          type: "bar",
          data: sorted.map((d) => d.views),
          barMaxWidth: 24,
          itemStyle: {
            borderRadius: [0, 4, 4, 0],
          },
        },
      ],
    };
  }, [data, title]);

  const { chartRef } = useEChart(option);

  return (
    <div className={styles.chartCard}>
      <div ref={chartRef} style={{ width: "100%", height }} />
    </div>
  );
}
