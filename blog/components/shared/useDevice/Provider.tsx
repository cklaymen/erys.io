import React, { FC, useState, useEffect, useCallback } from "react";

import DeviceContext from "./context";
import { Device } from "./types";
import { calculateDeviceSize } from "./helpers";
import { SizeBreakpoint } from "../sizeBreakpoints";

const DeviceProvider: FC = ({ children }) => {
  const [size, setSize] = useState<Device["size"]>(
    calculateDeviceSize(process.browser ? window.innerWidth : 0)
  );

  useEffect(() => {
    if (process.browser) {
      const handleWindowResize = () => {
        setSize(calculateDeviceSize(window.innerWidth));
      };

      window.addEventListener("resize", handleWindowResize);

      return () => window.removeEventListener("resize", handleWindowResize);
    }
  }, []);

  const isSize = useCallback<(...args: SizeBreakpoint[]) => boolean>(
    (...args) => args.includes(size),
    [size]
  );

  return (
    <DeviceContext.Provider value={{ size, isSize }}>
      {children}
    </DeviceContext.Provider>
  );
};

export default DeviceProvider;
