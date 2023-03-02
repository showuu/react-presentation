const ComponentSplitting = () => {
  return (
    <section>
      <div className="mb-10">状态下移/组件拆分</div>
      <div className="flex gap-2">
        <pre className="flex-1 text-sm">
          <code
            className="fragment semi-fade-out jsx"
            data-trim
            data-line-numbers="2,5-9"
          >
            <script
              type="text/template"
              dangerouslySetInnerHTML={{
                __html: `const Component = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      /** 触发re-render*/
      <button onClick={() => setOpen(true)}/>
      <Modal visible={open} />
      /** re-render带来损耗，需要优化*/
      <SlowAndHeavyComponent />
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
            data-line-numbers="1-2,5-7,14-16"
          >
            <script
              type="text/template"
              dangerouslySetInnerHTML={{
                __html: `const ButtonWithModal = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      /** 触发re-render*/
      <button onClick={() => setOpen(true)}/>
      <Modal visible={open} />
    </>
  )
}
const Component = () => {
  return (
    <>
      <ButtonWithModal />
      /** 不受影响 */
      <SlowAndHeavyComponent />
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

export default ComponentSplitting;
