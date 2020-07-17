import { useContext } from "react";

import DeviceContext from "src/modules/shared/useDevice/context";

const useDevice = () => useContext(DeviceContext);

export default useDevice;
