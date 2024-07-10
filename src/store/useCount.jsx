import create from "zustand";

const useStore = create((set, get) => ({
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
  getTotal: () => {
    const state = get();
    return Object.keys(state.counts).reduce((total, id) => {
      const count = state.counts[id] || 0;
      const price = state.prices[id] || 0;
      return total + count * price;
    }, 0);
  },
}));

export default useStore;
