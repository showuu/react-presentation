import { useRef } from "react";

const HeavyComponent = () => {
  const timeDiffRef = useRef(0);
  const now = performance.now();
  const random = Math.random();
  while ((timeDiffRef.current = performance.now() - now) < random * 1000) {}
  return (
    <div className="flex flex-col">{`渲染耗时${timeDiffRef.current.toFixed(
      2
    )}毫秒`}</div>
  );
};

export default HeavyComponent;
