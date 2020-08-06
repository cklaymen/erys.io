import { NAV_FLOAT_BUTTON_BAR_WIDTH_IN_PX_MEDIUM } from "src/modules/Nav/components";

export const CONTENT_PADDING_EXTRA_SMALL = "15px";
export const CONTENT_PADDING_MEDIUM = [
  "3vw",
  `${NAV_FLOAT_BUTTON_BAR_WIDTH_IN_PX_MEDIUM}px`,
  "3vw",
  "9vw",
] as const;
export const CONTENT_PADDING_MEDIUM_OPPOSITE = [
  "-3vw",
  `-${NAV_FLOAT_BUTTON_BAR_WIDTH_IN_PX_MEDIUM}px`,
  "-3vw",
  "-9vw",
] as const;
export const CONTENT_PADDING_LARGE = [
  "3vw",
  `${NAV_FLOAT_BUTTON_BAR_WIDTH_IN_PX_MEDIUM}px`,
  "3vw",
  "3vw",
];
