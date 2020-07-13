import { createContext } from "react";

import { Device } from "./types";

const DeviceContext = createContext<Device>({ size: "extraSmall" });

export default DeviceContext;
