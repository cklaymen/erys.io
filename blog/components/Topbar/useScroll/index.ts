import { useContext } from "react";

import ScrollContext from "./context";

const useScroll = () => useContext(ScrollContext);

export default useScroll;
