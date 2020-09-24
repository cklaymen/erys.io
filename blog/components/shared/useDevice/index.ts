import { useContext } from "react";

import DeviceContext from "./context";

const useDevice = () => useContext(DeviceContext);

export default useDevice;
