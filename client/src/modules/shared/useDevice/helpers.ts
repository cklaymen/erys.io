import { Device } from "src/modules/shared/useDevice/types";

import { minSizeBreakpointsInPx } from "src/modules/shared/sizeBreakpoints";

export function calculateDeviceSize(windowInnerWidth: number): Device["size"] {
  if (windowInnerWidth < minSizeBreakpointsInPx.small) {
    return "extraSmall";
  } else if (windowInnerWidth < minSizeBreakpointsInPx.medium) {
    return "small";
  } else if (windowInnerWidth < minSizeBreakpointsInPx.large) {
    return "medium";
  } else if (windowInnerWidth < minSizeBreakpointsInPx.extraLarge) {
    return "large";
  } else {
    return "extraLarge";
  }
}
