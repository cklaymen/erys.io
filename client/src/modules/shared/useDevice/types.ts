import { SizeBreakpoint } from "src/modules/shared/sizeBreakpoints";

export interface Device {
  size: SizeBreakpoint | "extraSmall";
  isSize(...size: SizeBreakpoint[]): boolean;
}
