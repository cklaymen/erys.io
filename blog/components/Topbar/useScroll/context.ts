import { createContext } from "react";

import { Scroll } from "./types";

const ScrollContext = createContext<Scroll>({
  pageYOffset: 0,
});

export default ScrollContext;
