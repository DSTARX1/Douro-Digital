import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  transpilePackages: ["echarts", "zrender"],
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
