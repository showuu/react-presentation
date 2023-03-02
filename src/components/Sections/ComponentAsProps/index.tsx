const ComponentAsProps = () => {
  return (
    <section>
      <div className="mb-10">组件作为props/children传递</div>
      <div className="flex gap-2">
        <pre className="flex-1 text-sm">
          <code
            className="fragment semi-fade-out jsx"
            data-trim
            data-line-numbers="4-7,9"
          >
            <script
              type="text/template"
              dangerouslySetInnerHTML={{
                __html: `const Component = () => {
  const [value, setValue] = useState({});
  return (
    /** onSrcoll/onMouseOve等频发触发re-render的场景 */
    <div onScroll={setValue} onMouseMove={setValue}>
      /** re-render带来损耗，需要优化 */
      <SlowAndHeavyComponent1 />
      <AnotherComponet />
      <SlowAndHeavyComponent2 />
    </div>
  };
};`,
              }}
            />
          </code>
        </pre>
        <pre className="flex-1 text-sm">
          <code
            className="fragment fade-in jsx"
            data-trim
            data-line-numbers="1,6,8,14-17"
          >
            <script
              type="text/template"
              dangerouslySetInnerHTML={{
                __html: `const ComponentFrequentRender = ({ top, bottom }) => {
  const [value, setValue] = useState({});
  return (
    /** onSrcoll/onMouseOve等频发触发re-render的场景 */
    <div onScroll={setValue} onMouseMove={setValue}>
      {top}
      <AnotherComponet />
      {bottom}
    </div>
  )
}
const Component = () => {
  return (
    <ComponentFrequentRender
    top={<SlowAndHeavyComponent1 />}
    bottom={<SlowAndHeavyComponent2 />}
    />
  };
};`,
              }}
            />
          </code>
        </pre>
      </div>
    </section>
  );
};

export default ComponentAsProps;
