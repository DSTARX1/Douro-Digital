import styles from "./PixelIcons.module.css";

interface IconProps {
  size?: number;
  color?: string;
  className?: string;
  animate?: boolean;
}

/** 8-bit play triangle */
export function PixelPlay({ size = 24, color = "currentColor", className = "", animate = false }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill={color}
      shapeRendering="crispEdges"
      className={`${styles.pixelIcon} ${animate ? styles.pulse : ""} ${className}`}
    >
      <rect x="4" y="2" width="2" height="12" />
      <rect x="6" y="3" width="2" height="10" />
      <rect x="8" y="4" width="2" height="8" />
      <rect x="10" y="5" width="2" height="6" />
      <rect x="12" y="6" width="2" height="4" />
    </svg>
  );
}

/** 8-bit pause — two pixel columns built from individual squares */
export function PixelPause({ size = 24, color = "currentColor", className = "", animate = false }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      shapeRendering="crispEdges"
      className={`${styles.pixelIcon} ${animate ? styles.pulse : ""} ${className}`}
    >
      {/* Left bar */}
      <rect x="6" y="4" width="4" height="16" />
      {/* Right bar */}
      <rect x="14" y="4" width="4" height="16" />
    </svg>
  );
}

/** 8-bit left chevron */
export function PixelChevronLeft({ size = 20, color = "currentColor", className = "", animate = false }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill={color}
      shapeRendering="crispEdges"
      className={`${styles.pixelIcon} ${animate ? styles.bounce : ""} ${className}`}
    >
      <rect x="8" y="2" width="2" height="2" />
      <rect x="6" y="4" width="2" height="2" />
      <rect x="4" y="6" width="2" height="2" />
      <rect x="2" y="8" width="2" height="0" />
      <rect x="4" y="8" width="2" height="2" />
      <rect x="6" y="10" width="2" height="2" />
      <rect x="8" y="12" width="2" height="2" />
    </svg>
  );
}

/** 8-bit right chevron */
export function PixelChevronRight({ size = 20, color = "currentColor", className = "", animate = false }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill={color}
      shapeRendering="crispEdges"
      className={`${styles.pixelIcon} ${animate ? styles.bounce : ""} ${className}`}
    >
      <rect x="6" y="2" width="2" height="2" />
      <rect x="8" y="4" width="2" height="2" />
      <rect x="10" y="6" width="2" height="2" />
      <rect x="10" y="8" width="2" height="2" />
      <rect x="8" y="10" width="2" height="2" />
      <rect x="6" y="12" width="2" height="2" />
    </svg>
  );
}

/** 8-bit chevron down */
export function PixelChevronDown({ size = 24, color = "currentColor", className = "", animate = false }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill={color}
      shapeRendering="crispEdges"
      className={`${styles.pixelIcon} ${animate ? styles.bounce : ""} ${className}`}
    >
      <rect x="2" y="4" width="2" height="2" />
      <rect x="4" y="6" width="2" height="2" />
      <rect x="6" y="8" width="2" height="2" />
      <rect x="8" y="8" width="2" height="2" />
      <rect x="10" y="6" width="2" height="2" />
      <rect x="12" y="4" width="2" height="2" />
    </svg>
  );
}

/** 8-bit star / sparkle */
export function PixelStar({ size = 14, color = "currentColor", className = "", animate = false }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill={color}
      shapeRendering="crispEdges"
      className={`${styles.pixelIcon} ${animate ? styles.sparkle : ""} ${className}`}
    >
      {/* Vertical beam */}
      <rect x="7" y="0" width="2" height="4" />
      <rect x="7" y="12" width="2" height="4" />
      {/* Horizontal beam */}
      <rect x="0" y="7" width="4" height="2" />
      <rect x="12" y="7" width="4" height="2" />
      {/* Diagonal pixels */}
      <rect x="5" y="5" width="2" height="2" />
      <rect x="9" y="5" width="2" height="2" />
      <rect x="5" y="9" width="2" height="2" />
      <rect x="9" y="9" width="2" height="2" />
      {/* Center */}
      <rect x="7" y="7" width="2" height="2" />
    </svg>
  );
}

/** 8-bit top-right diagonal arrow */
export function PixelArrowTopRight({ size = 14, color = "currentColor", className = "", animate = false }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill={color}
      shapeRendering="crispEdges"
      className={`${styles.pixelIcon} ${animate ? styles.slide : ""} ${className}`}
    >
      {/* Diagonal shaft */}
      <rect x="4" y="10" width="2" height="2" />
      <rect x="6" y="8" width="2" height="2" />
      <rect x="8" y="6" width="2" height="2" />
      <rect x="10" y="4" width="2" height="2" />
      {/* Arrowhead horizontal */}
      <rect x="6" y="2" width="2" height="2" />
      <rect x="8" y="2" width="2" height="2" />
      <rect x="10" y="2" width="2" height="2" />
      <rect x="12" y="2" width="2" height="2" />
      {/* Arrowhead vertical */}
      <rect x="12" y="4" width="2" height="2" />
      <rect x="12" y="6" width="2" height="2" />
      <rect x="12" y="8" width="2" height="2" />
    </svg>
  );
}

/** 8-bit right arrow */
export function PixelArrowRight({ size = 16, color = "currentColor", className = "", animate = false }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill={color}
      shapeRendering="crispEdges"
      className={`${styles.pixelIcon} ${animate ? styles.slide : ""} ${className}`}
    >
      {/* Shaft */}
      <rect x="2" y="7" width="8" height="2" />
      {/* Arrowhead */}
      <rect x="9" y="5" width="2" height="2" />
      <rect x="11" y="7" width="2" height="2" />
      <rect x="9" y="9" width="2" height="2" />
    </svg>
  );
}

/** 8-bit speaker with arc waves (unmuted) */
export function PixelVolumeOn({ size = 16, color = "currentColor", className = "" }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill={color}
      shapeRendering="crispEdges"
      className={`${styles.pixelIcon} ${className}`}
    >
      {/* Speaker back */}
      <rect x="1" y="6" width="3" height="4" />
      {/* Cone */}
      <rect x="4" y="5" width="1" height="6" />
      <rect x="5" y="4" width="1" height="8" />
      {/* Wave 1 — small arc */}
      <rect x="8" y="5" width="1" height="1" />
      <rect x="9" y="6" width="1" height="4" />
      <rect x="8" y="10" width="1" height="1" />
      {/* Wave 2 — large arc */}
      <rect x="11" y="3" width="1" height="2" />
      <rect x="12" y="5" width="1" height="6" />
      <rect x="11" y="11" width="1" height="2" />
    </svg>
  );
}

/** 8-bit hamburger menu (3 horizontal bars) */
export function PixelHamburger({ size = 24, color = "currentColor", className = "" }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill={color}
      shapeRendering="crispEdges"
      className={`${styles.pixelIcon} ${className}`}
    >
      {/* Top bar */}
      <rect x="2" y="3" width="12" height="2" />
      {/* Middle bar */}
      <rect x="2" y="7" width="12" height="2" />
      {/* Bottom bar */}
      <rect x="2" y="11" width="12" height="2" />
    </svg>
  );
}

/** 8-bit X / close icon */
export function PixelClose({ size = 24, color = "currentColor", className = "" }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill={color}
      shapeRendering="crispEdges"
      className={`${styles.pixelIcon} ${className}`}
    >
      {/* Top-left to bottom-right diagonal */}
      <rect x="2" y="2" width="2" height="2" />
      <rect x="4" y="4" width="2" height="2" />
      <rect x="6" y="6" width="4" height="4" />
      <rect x="10" y="10" width="2" height="2" />
      <rect x="12" y="12" width="2" height="2" />
      {/* Bottom-left to top-right diagonal */}
      <rect x="2" y="12" width="2" height="2" />
      <rect x="4" y="10" width="2" height="2" />
      <rect x="10" y="4" width="2" height="2" />
      <rect x="12" y="2" width="2" height="2" />
    </svg>
  );
}

/** 8-bit speaker with pixel X (muted) */
export function PixelVolumeOff({ size = 16, color = "currentColor", className = "" }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill={color}
      shapeRendering="crispEdges"
      className={`${styles.pixelIcon} ${className}`}
    >
      {/* Speaker back */}
      <rect x="1" y="6" width="3" height="4" />
      {/* Cone */}
      <rect x="4" y="5" width="1" height="6" />
      <rect x="5" y="4" width="1" height="8" />
      {/* X — top-left to bottom-right */}
      <rect x="8" y="4" width="2" height="2" />
      <rect x="10" y="6" width="2" height="2" />
      <rect x="12" y="8" width="2" height="2" />
      {/* X — bottom-left to top-right */}
      <rect x="8" y="8" width="2" height="2" />
      <rect x="12" y="4" width="2" height="2" />
    </svg>
  );
}
