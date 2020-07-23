import { NAV_FLOAT_BUTTON_BAR_WIDTH_IN_PX_MEDIUM } from "src/modules/Nav/components";

export const CONTENT_PADDING_EXTRA_SMALL = "15px";
export const CONTENT_PADDING_MEDIUM = [
  "3vw",
  `max(9vw, ${NAV_FLOAT_BUTTON_BAR_WIDTH_IN_PX_MEDIUM}px)`,
  "3vw",
  "9vw",
] as const;
export const CONTENT_PADDING_MEDIUM_OPPOSITE = [
  "-3vw",
  `min(-9vw, -${NAV_FLOAT_BUTTON_BAR_WIDTH_IN_PX_MEDIUM}px)`,
  "-3vw",
  "-9vw",
] as const;
export const CONTENT_PADDING_LARGE = [
  "3vw",
  `max(${NAV_FLOAT_BUTTON_BAR_WIDTH_IN_PX_MEDIUM}px,3vw)`,
  "3vw",
  "3vw",
];