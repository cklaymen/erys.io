import { useContext } from "react";

import localStorageContext from "./context";

const useLocalStorage = () => useContext(localStorageContext);

export default useLocalStorage;
