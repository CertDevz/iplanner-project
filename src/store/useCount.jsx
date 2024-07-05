import create from "zustand";

const useStore = create((set) => ({
  counts: {},
  prices: {},
  setCount: (id, count) =>
    set((state) => ({
      counts: { ...state.counts, [id]: count },
    })),
  setPrice: (id, price) =>
    set((state) => ({
      prices: { ...state.prices, [id]: price },
    })),
  getTotal: () =>
    set((state) => {
      return Object.entries(state.counts).reduce((acc, [id, count]) => {
        const price = state.prices[id] || 0;
        return acc + count * price;
      }, 0);
    }),
}));

export default useStore;
