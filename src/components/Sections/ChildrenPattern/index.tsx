import clsx from "clsx";
import { MouseEvent, ReactNode, useState } from "react";
import ChildComponent from "../../ChildComponent";
import styles from "../index.module.css";

const ParentComponent = ({ className }: { className?: string }) => {
  const [state, setState] = useState({ x: 100, y: 100 });
  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    setState({ x: e.clientX, y: e.clientY });
  };
  return (
    <div
      className={clsx(
        "flex-1 p-2 h-80 text-lg text-center bg-yellow-400/50 rounded-lg shadow-md",
        className
      )}
      onMouseMove={onMouseMove}
    >
      <div className="flex flex-col">
        {`X：${state.x}，Y：${state.y}`}
        <ChildComponent source="性能未优化" />
      </div>
    </div>
  );
};

const ParentComponentWithChildren = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  const [state, setState] = useState({ x: 100, y: 100 });
  const onMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    setState({ x: e.clientX, y: e.clientY });
  };
  return (
    <div
      className={clsx(
        "flex-1 p-2 h-80 text-lg text-center bg-teal-300/50 rounded-lg shadow-md",
        className
      )}
      onMouseMove={onMouseMove}
    >
      <div className="flex flex-col">
        {`X：${state.x}，Y：${state.y}`}
        {children}
        <span>children</span>
      </div>
    </div>
  );
};

const ChildrenPattern = () => {
  return (
    <section>
      <section>
        <pre className="text-xl">
          <code className="jsx" data-trim data-line-numbers>
            <script
              type="text/template"
              dangerouslySetInnerHTML={{
                __html: `const ChildComponent = ({ source }: { source: string }) => {
  const countRef = useRef(0);
  countRef.current +=1;
  return (
    <div>子组件 {source} 渲染 {countRef.current} 次</div>
  );
};`,
              }}
            />
          </code>
        </pre>
      </section>
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
};

<ParentComponent />`,
                }}
              />
            </code>
          </pre>
          <pre className="fragment flex-1 text-sm" data-fragment-index="1">
            <code className="jsx" data-trim data-line-numbers="1,8,13-15">
              <script
                type="text/template"
                dangerouslySetInnerHTML={{
                  __html: `const ParentComponent = ({ children }) => {
  const [state, setState] = useState({ x: 100, y: 100 });
  const onMouseMove = (e) => {
    setState({ x: e.clientX, y: e.clientY });
  };
  return (
    <div onMouseMove={onMouseMove}>
      {children}
    </div>
  );
};

<ParentComponent>
  <ChildComponent source="性能已优化" />
</ParentComponent>`,
                }}
              />
            </code>
          </pre>
        </div>
        <div className="w-full flex gap-2">
          <ParentComponent />
          <ParentComponentWithChildren
            className="fragment"
            data-fragment-index="2"
          >
            <ChildComponent source="性能已优化" />
          </ParentComponentWithChildren>
        </div>
      </section>
    </section>
  );
};

export default ChildrenPattern;
