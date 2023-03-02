import clsx from "clsx";
import { MouseEvent, ReactNode, useMemo, useState } from "react";
import ChildComponent from "../../ChildComponent";
import styles from "../index.module.css";

type ParentComponetProps = {
  className?: string;
  children(): ReactNode;
};

const ParentComponent = ({ className, children }: ParentComponetProps) => {
  const [state, setState] = useState({ x: 100, y: 100 });
  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    setState({ x: e.clientX, y: e.clientY });
  };
  return (
    <div
      className={clsx(
        className,
        "flex-1 p-2 h-80 text-lg text-cnter bg-yellow-400/50 rounded-lg shadow-md"
      )}
      onMouseMove={onMouseMove}
    >
      {`X：${state.x}，Y：${state.y}`}
      {children()}
    </div>
  );
};

const ParentComponenWithUseMemo = ({
  className,
  children,
}: ParentComponetProps) => {
  console.log("ParentComponenWithUseMemo:", children);
  const memoChildren = useMemo(() => children(), [children]);
  const [state, setState] = useState({ x: 100, y: 100 });
  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    setState({ x: e.clientX, y: e.clientY });
  };
  return (
    <div
      className={clsx(
        className,
        "flex-1 p-2 h-80 text-lg text-cnter bg-teal-300/50 rounded-lg shadow-md"
      )}
      onMouseMove={onMouseMove}
    >
      {`X：${state.x}，Y：${state.y}`}
      {memoChildren}
      <span>useMemo</span>
    </div>
  );
};

const RenderFunctionPattern = () => {
  return (
    <section className={styles.section}>
      <div className="flex gap-2">
        <pre className="flex-1 text-sm">
          <code className="jsx" data-trim data-line-numbers>
            <script
              type="text/template"
              dangerouslySetInnerHTML={{
                __html: `const ParentComponent = ({ children }) => {
  const [state, setState] = useState({ x: 100, y: 100 });
  const onmouseMove = (e) => {
    setState({ x: e.clientX, y: e.clientY });
  };
  return (
    <div onMouseMove={onMouseMove}>
      {children()}
    </div>
  );
};

<ParentComponent>
{() => <ChildComponent source="性能未优化" />}
</ParentComponent>`,
              }}
            />
          </code>
        </pre>
        <pre className="fragment flex-1 text-sm" data-fragment-index="1">
          <code className="jsx" data-trim data-line-numbers="1-2,9">
            <script
              type="text/template"
              dangerouslySetInnerHTML={{
                __html: `const ParentComponent = ({ children }) => {
  const memoChildren = useMemo(() => children(), [children]);
  const [state, setState] = useState({ x: 100, y: 100 });
  const onMouseMove = (e) => {
    setState({ x: e.clientX, y: e.clientY });
  };
  return (
    <div onMouseMove={onMouseMove}>
      {memoChildren}
    </div>
  );
};

<ParentComponent>
{() => <ChildComponent source="性能已优化" />}
</ParentComponent>`,
              }}
            />
          </code>
        </pre>
      </div>
      <div className="w-full flex gap-2">
        <ParentComponent>
          {() => <ChildComponent source="性能未优化" />}
        </ParentComponent>
        <ParentComponenWithUseMemo className="fragment" data-fragment-index="2">
          {() => <ChildComponent source="性能已优化" />}
        </ParentComponenWithUseMemo>
      </div>
    </section>
  );
};

export default RenderFunctionPattern;
