import { useContext } from "react";

import ScrollContext from "src/modules/Topbar/useScroll/context";

const useScroll = () => useContext(ScrollContext);

export default useScroll;
