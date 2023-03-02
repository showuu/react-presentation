import clsx from "clsx";
import { memo, MouseEvent, useState } from "react";
import ChildComponent from "../../ChildComponent";
import styles from "../index.module.css";

const MemoChildComponent = memo(ChildComponent);

const ParentComponent = () => {
  const [state, setState] = useState({ x: 100, y: 100 });
  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    setState({ x: e.clientX, y: e.clientY });
  };
  return (
    <div
      className="flex-1 p-2 h-80 text-lg text-center bg-yellow-400/50 rounded-lg shadow-md"
      onMouseMove={onMouseMove}
    >
      <div className="flex flex-col text-center">
        {`X：${state.x}，Y：${state.y}`}
        <ChildComponent source="性能未优化" />
      </div>
    </div>
  );
};

const ParentComponenWithMemoChild = ({ className }: { className?: string }) => {
  const [state, setState] = useState({ x: 100, y: 100 });
  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    setState({ x: e.clientX, y: e.clientY });
  };
  return (
    <div
      className={clsx(
        className,
        "flex-1 p-2 h-80 text-lg text-center bg-teal-300/50  rounded-lg shadow-md"
      )}
      onMouseMove={onMouseMove}
    >
      <div className="flex flex-col text-center">
        {`X：${state.x}，Y：${state.y}`}
        <MemoChildComponent source="性能已优化" />
        <span>memo</span>
      </div>
    </div>
  );
};

const MemoChildPattern = () => {
  return (
    <section className={styles.section}>
      <div className="flex gap-2">
        <pre className="flex-1 text-sm">
          <code className="jsx" data-trim data-line-numbers>
            <script
              type="text/template"
              dangerouslySetInnerHTML={{
                __html: `const ParentComponent = () => {
  const [state, setState] = useState({ x: 100, y: 100 });
  const onmouseMove = (e) => {
    setState({ x: e.clientX, y: e.clientY });
  };
  return (
    <div onMouseMove={onMouseMove}>
      <ChildComponent source="性能未优化" />
    </div>
  );
};`,
              }}
            />
          </code>
        </pre>
        <pre className="fragment flex-1 text-sm" data-fragment-index="1">
          <code className="jsx" data-trim data-line-numbers="1,9">
            <script
              type="text/template"
              dangerouslySetInnerHTML={{
                __html: `const MemoChildComponent = memo(ChildComponent);
const ParentComponent = () => {
  const [state, setState] = useState({ x: 100, y: 100 });
  const onMouseMove = (e) => {
    setState({ x: e.clientX, y: e.clientY });
  };
  return (
    <div onMouseMove={onMouseMove}>
      <MemoChildComponent source="性能已优化" />
    </div>
  );
};`,
              }}
            />
          </code>
        </pre>
      </div>
      <div className="w-full flex gap-2">
        <ParentComponent />
        <ParentComponenWithMemoChild
          className="fragment"
          data-fragment-index="2"
        />
      </div>
    </section>
  );
};

export default MemoChildPattern;
