const ParentUpdate = () => {
  return (
    <section>
      <div className="mb-10">组件作为props/children传递</div>
      <div className="flex gap-2">
        <pre className="flex-1 text-sm">
          <code
            className="fragment semi-fade-out jsx"
            data-trim
            data-line-numbers="3,4,7-11"
          >
            <script
              type="text/template"
              dangerouslySetInnerHTML={{
                __html: `const Parent = () => {
  /** re-render */ 
  const [value, setValue] = useState({});
  const onClick = () => { setValue(v => v + 1) };
  return (
    <>
      <button onClick={onClick}>Click</button>
      <ComponentFrequentRender 
      top={<SlowAndHeavyComponent1 />} 
      bottom={<SlowAndHeavyComponent2 />} 
      />
    </>
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
            data-line-numbers="1-2,6-7,10-14"
          >
            <script
              type="text/template"
              dangerouslySetInnerHTML={{
                __html: `const MemoSlowAndHeavyComponent1 = memo(SlowAndHeavyComponent1);
const MemoSlowAndHeavyComponent2 = memo(SlowAndHeavyComponent2);

const Parent = () => {
  /** re-render */ 
  const [value, setValue] = useState({});
  const onClick = () => { setValue(v => v + 1) };
  return (
    <>
      <button onClick={onClick}>Click</button>
      <ComponentFrequentRender 
      top={<MemoSlowAndHeavyComponent1 />} 
      bottom={<MemoSlowAndHeavyComponent2 />} 
      />
    </>
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

export default ParentUpdate;
