import { createContext } from "react";

import { Device } from "./types";

const DeviceContext = createContext<Device>({
  size: "extraSmall",
  isSize: () => {
    new Error("You need to wrap with DeviceProvider first.");
    return false;
  },
});

export default DeviceContext;
