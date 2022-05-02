const stores: string[] = [];

export const captureStoreState = (name: string) => {
  stores.push(name);
};

export const getStoreState = () => stores;

export const clearStoreState = () => {
  stores.length = 0;
};
