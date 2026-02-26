"use client";

import styles from "@/app/(admin)/admin.module.css";
import { useEChart } from "@/lib/use-echart";
import type { EChartsOption } from "echarts";
import { useMemo } from "react";

interface Props {
  data: { name: string; value: number }[];
  height?: number;
}

export default function DeviceDonutChart({ data, height = 320 }: Props) {
  const total = useMemo(
    () => data.reduce((sum, d) => sum + d.value, 0),
    [data],
  );

  const option = useMemo<EChartsOption>(() => {
    return {
      tooltip: {
        trigger: "item",
        formatter: "{b}: {c} ({d}%)",
      },
      legend: {
        orient: "horizontal",
        bottom: 0,
        textStyle: { color: "#94a3b8", fontSize: 12 },
        itemWidth: 10,
        itemHeight: 10,
        itemGap: 16,
      },
      graphic: [
        {
          type: "text",
          left: "center",
          top: "38%",
          style: {
            text: total.toLocaleString(),
            fontSize: 28,
            fontWeight: 600,
            fill: "#fafafa",
            textAlign: "center",
          },
        },
        {
          type: "text",
          left: "center",
          top: "50%",
          style: {
            text: "Devices",
            fontSize: 12,
            fill: "#64748b",
            textAlign: "center",
          },
        },
      ],
      series: [
        {
          type: "pie",
          radius: ["52%", "78%"],
          center: ["50%", "45%"],
          padAngle: 2,
          itemStyle: { borderRadius: 4 },
          label: { show: false },
          emphasis: {
            scaleSize: 6,
          },
          data,
        },
      ],
    };
  }, [data, total]);

  const { chartRef } = useEChart(option);

  return (
    <div className={styles.chartCard}>
      <div ref={chartRef} style={{ width: "100%", height }} />
    </div>
  );
}
