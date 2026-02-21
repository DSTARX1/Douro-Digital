import * as echarts from "echarts/core";
import { LineChart, BarChart, PieChart } from "echarts/charts";
import {
  GridComponent,
  TooltipComponent,
  LegendComponent,
  TitleComponent,
  GraphicComponent,
} from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";
import { LabelLayout, UniversalTransition } from "echarts/features";

echarts.use([
  LineChart,
  BarChart,
  PieChart,
  GridComponent,
  TooltipComponent,
  LegendComponent,
  TitleComponent,
  GraphicComponent,
  CanvasRenderer,
  LabelLayout,
  UniversalTransition,
]);

echarts.registerTheme("adminDark", {
  darkMode: true,
  backgroundColor: "transparent",
  color: [
    "#6366f1",
    "#22d3ee",
    "#f59e0b",
    "#10b981",
    "#f43f5e",
    "#a78bfa",
    "#fb923c",
  ],
  textStyle: { color: "#94a3b8", fontFamily: "inherit" },
  tooltip: {
    backgroundColor: "rgba(15, 23, 42, 0.95)",
    borderColor: "rgba(99, 102, 241, 0.3)",
    textStyle: { color: "#e2e8f0" },
    extraCssText: "backdrop-filter: blur(8px); border-radius: 8px;",
  },
  categoryAxis: {
    axisLine: { lineStyle: { color: "rgba(148,163,184,0.15)" } },
    axisLabel: { color: "#64748b" },
    splitLine: { show: false },
  },
  valueAxis: {
    axisLine: { show: false },
    axisLabel: { color: "#64748b" },
    splitLine: {
      lineStyle: { color: "rgba(148,163,184,0.08)", type: "dashed" as const },
    },
  },
});

export { echarts };
