import { useRef } from "react";

const ChildComponent = ({ source }: { source: string }) => {
  const countRef = useRef(0);
  countRef.current += 1;
  console.count(`子组件重新渲染 from ${source} `);
  return (
    <div>
      {source} 渲染{" "}
      <span className="font-bold text-rose-600">{countRef.current}</span> 次
    </div>
  );
};

export default ChildComponent;
