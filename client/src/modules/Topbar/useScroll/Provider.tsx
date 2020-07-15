import React, { FC, useState, useEffect } from "react";

import ScrollContext from "src/modules/Topbar/useScroll/context";
import { Scroll } from "src/modules/Topbar/useScroll/types";

const ScrollProvider: FC = ({ children }) => {
  const [pageYOffset, setPageYOffset] = useState<Scroll["pageYOffset"]>(
    window.pageYOffset
  );

  useEffect(() => {
    const handleScroll = () => {
      setPageYOffset(window.pageYOffset);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ScrollContext.Provider value={{ pageYOffset }}>
      {children}
    </ScrollContext.Provider>
  );
};

export default ScrollProvider;
