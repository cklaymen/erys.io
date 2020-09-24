import { createContext } from "react";

import { LocalStorage } from "./types";

const localStorageContext = createContext<LocalStorage>({
  setItem: () => {
    throw new Error("Need to wrap with LocalStorageProvider first.");
  },
  getItem: () => {
    throw new Error("Need to wrap with LocalStorageProvider first.");
  },
});

export default localStorageContext;
