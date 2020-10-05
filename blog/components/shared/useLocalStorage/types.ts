export interface LocalStorageData {
  isCookiesMessageClosed: "true";
}

export type LocalStorageDataKey = keyof LocalStorageData;

export interface LocalStorage {
  setItem<T extends LocalStorageDataKey>(
    key: T,
    value: LocalStorageData[T]
  ): void;
  getItem<T extends LocalStorageDataKey>(key: T): LocalStorageData[T] | null;
}
