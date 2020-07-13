import React, { FC, useState, useEffect } from "react";

import DeviceContext from "src/modules/shared/useDevice/context";
import { Device } from "src/modules/shared/useDevice/types";
import { calculateDeviceSize } from "src/modules/shared/useDevice/helpers";

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

  return (
    <DeviceContext.Provider value={{ size }}>{children}</DeviceContext.Provider>
  );
};

export default DeviceProvider;
