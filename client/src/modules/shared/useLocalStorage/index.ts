import { useContext } from "react";

import localStorageContext from "src/modules/shared/useLocalStorage/context";

const useLocalStorage = () => useContext(localStorageContext);

export default useLocalStorage;
