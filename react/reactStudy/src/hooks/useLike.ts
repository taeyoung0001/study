import { useState } from "react";

type UseCounterOption = {
  initial?: number;
  step?: number;
};

const useCounter = (t: UseCounterOption = {}) => {
  const { initial = 0, step = 1 } = t;
  //매개변수로 객체를 받고, initial,step옵션 줌
  const [count, setCount] = useState(initial);
  const increase = () => setCount((prev) => prev + step);
  const decrees = () => setCount((prev) => prev - step);
  const reset = () => setCount(initial);

  return { count, increase, decrees, reset };
};

export default useCounter;
