import React, { FC, useState, useCallback } from "react";

import localStorageContext from "src/modules/shared/useLocalStorage/context";
import {
  LocalStorageData,
  LocalStorage,
  LocalStorageDataKey,
} from "src/modules/shared/useLocalStorage/types";

const initialData: LocalStorageData = {
  isCookiesMessageClosed: localStorage.getItem(
    "isCookiesMessageClosed"
  ) as LocalStorageData["isCookiesMessageClosed"],
};

const LocalStorageProvider: FC = ({ children }) => {
  const [data, setData] = useState<LocalStorageData>(initialData);

  const setItem = useCallback<LocalStorage["setItem"]>(
    (<T extends LocalStorageDataKey>(key: T, value: LocalStorageData[T]) => {
      if (data[key] !== value) {
        localStorage.setItem(key, value);
        setData({ ...data, [key]: value });
      }
    }) as LocalStorage["setItem"],
    [data]
  );
  const getItem = useCallback<LocalStorage["getItem"]>(
    (key: LocalStorageDataKey) => data[key],
    [data]
  );

  return (
    <localStorageContext.Provider value={{ setItem, getItem }}>
      {children}
    </localStorageContext.Provider>
  );
};
export default LocalStorageProvider;
