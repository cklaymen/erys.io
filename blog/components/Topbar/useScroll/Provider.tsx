import React, { FC, useState, useEffect } from "react";

import ScrollContext from "./context";
import { Scroll } from "./types";

const ScrollProvider: FC = ({ children }) => {
  const [pageYOffset, setPageYOffset] = useState<Scroll["pageYOffset"]>(
    (process.browser && window.pageYOffset) || 0
  );

  useEffect(() => {
    if (process.browser) {
      const handleScroll = () => {
        setPageYOffset(window.pageYOffset);
      };

      window.addEventListener("scroll", handleScroll);

      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <ScrollContext.Provider value={{ pageYOffset }}>
      {children}
    </ScrollContext.Provider>
  );
};

export default ScrollProvider;
