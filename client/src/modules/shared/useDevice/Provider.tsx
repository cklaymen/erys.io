import React, { FC, useState, useEffect, useCallback } from "react";

import DeviceContext from "src/modules/shared/useDevice/context";
import { Device } from "src/modules/shared/useDevice/types";
import { calculateDeviceSize } from "src/modules/shared/useDevice/helpers";
import { SizeBreakpoint } from "src/modules/shared/sizeBreakpoints";

const DeviceProvider: FC = ({ children }) => {
  const [size, setSize] = useState<Device["size"]>(
    calculateDeviceSize(window.innerWidth)
  );

  useEffect(() => {
    const handleWindowResize = () => {
      setSize(calculateDeviceSize(window.innerWidth));
    };

    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
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
