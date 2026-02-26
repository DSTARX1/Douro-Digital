"use client";

import { echarts } from "@/lib/echarts-theme";
import type { EChartsOption } from "echarts";
import { useEffect, useRef } from "react";

export function useEChart(option: EChartsOption | null, theme = "adminDark") {
  const chartRef = useRef<HTMLDivElement>(null);
  const chartInstance = useRef<echarts.ECharts | null>(null);

  // biome-ignore lint/correctness/useExhaustiveDependencies: intentional mount-only init
  useEffect(() => {
    if (!chartRef.current) return;
    // React 19 StrictMode: dispose before re-init
    if (chartInstance.current) chartInstance.current.dispose();
    chartInstance.current = echarts.init(chartRef.current, theme, {
      renderer: "canvas",
    });
    if (option) chartInstance.current.setOption(option);
    return () => {
      chartInstance.current?.dispose();
      chartInstance.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Update options reactively
  useEffect(() => {
    if (!chartInstance.current || !option) return;
    chartInstance.current.setOption(option, {
      notMerge: false,
      lazyUpdate: false,
    });
  }, [option]);

  // Responsive resize via ResizeObserver (not window.resize — sidebar collapse matters)
  useEffect(() => {
    if (!chartRef.current) return;
    const observer = new ResizeObserver(() => chartInstance.current?.resize());
    observer.observe(chartRef.current);
    return () => observer.disconnect();
  }, []);

  return { chartRef, chartInstance };
}
