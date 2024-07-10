import { CircleMinus, CirclePlus } from "lucide-react";
import { useState, useEffect } from "react";
import useStore from "../../../../../store/useCount";

const Counter = ({ id, price }) => {
  const [count, setCount] = useState(0);
  const setGlobalCount = useStore((state) => state.setCount);
  const setGlobalPrice = useStore((state) => state.setPrice);

  useEffect(() => {
    setGlobalCount(id, count);
    setGlobalPrice(id, price);
  }, [count, id, price, setGlobalCount, setGlobalPrice]);

  function handleDecrease() {
    setCount(count - 1);
  }

  function handleAdd() {
    setCount(count + 1);
  }

  return (
    <div className="flex gap-4">
      <button onClick={handleDecrease}>
        <CircleMinus color="purple" />
      </button>
      <span>{count}</span>
      <button onClick={handleAdd}>
        <CirclePlus color="purple" />
      </button>
    </div>
  );
};

export default Counter;
