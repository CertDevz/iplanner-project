// store.js
import create from "zustand";

const useStore = create((set) => ({
  count: 0,
  setCount: (newCount) => set({ count: newCount }),
}));

export default useStore;
