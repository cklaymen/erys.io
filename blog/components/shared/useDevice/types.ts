import { SizeBreakpoint } from "../sizeBreakpoints";

export interface Device {
  size: SizeBreakpoint | "extraSmall";
  isSize(...size: SizeBreakpoint[]): boolean;
}
