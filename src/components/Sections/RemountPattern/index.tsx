import clsx from "clsx";
import { useState } from "react";

const Remount = ({ className }: { className?: string }) => {
  const Input = ({ className }: { className?: string }) => {
    const [value, setValue] = useState("我是初始值");
    return (
      <input
        className={clsx("text-black", className)}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    );
  };
  const [count, setCount] = useState(0);
  return (
    <div className={clsx("flex-1 p-2 text-lg text-cnter shadow-md", className)}>
      <button
        className="block m-auto mb-2"
        onClick={() => setCount((v) => v + 1)}
      >
        重新渲染{count}次
      </button>
      <div className="r-stack">
        <div className="fragment fade-out">
          <div className="mb-2">Lose State</div>
          <Input className="fragmemnt fade-in-then-semi-out	block m-auto mb-2" />
        </div>
        <div className="fragment">
          <div className="mb-2">Keep State</div>
          <KeepStateInput className="fragmemnt fade-in block m-auto mb-2" />
        </div>
      </div>
    </div>
  );
};

const KeepStateInput = ({ className }: { className?: string }) => {
  const [value, setValue] = useState("我是初始值");
  return (
    <input
      className={clsx("text-black", className)}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

const RemountPattern = () => {
  return (
    <section>
      <div className="mb-10">在渲染函数中创建组件</div>
      <div className="flex gap-2">
        <pre className="flex-1 text-sm">
          <code
            className="fragment fade-out jsx"
            data-trim
            data-line-numbers="2-5,9"
          >
            <script
              type="text/template"
              dangerouslySetInnerHTML={{
                __html: `const Component = () => {
  const Input = () => {
    const [value, setValue] = useState("我是初始值");
    const onChange = (e) => setValue(e.target.value);
    return <input value={value} onChange={onChange} />
  };
  return (
    <button>重新渲染</button>
    <Input />
  );
};`,
              }}
            />
          </code>
          <code
            className="fragment fade-in jsx"
            data-trim
            data-line-numbers="1-4,9"
          >
            <script
              type="text/template"
              dangerouslySetInnerHTML={{
                __html: `const Input = () => {
  const [value, setValue] = useState("我是初始值");
  const onChange = (e) => setValue(e.target.value);
  return <input value={value} onChange={onChange} />
};
const Component = () => {  
  return (
    <button>重新渲染</button>
    <Input />
  );
};`,
              }}
            />
          </code>
        </pre>
        <Remount />
      </div>
    </section>
  );
};

export default RemountPattern;
