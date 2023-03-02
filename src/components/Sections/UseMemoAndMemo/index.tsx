const UseMemoAndMemo = () => {
  return (
    <section>
      <div className="mb-10">UseMemo和memo</div>
      <div className="mb-2 text-2xl text-emerald-500">
        优点：避免每次re-render时昂贵的计算
      </div>
      <div className="mb-2 text-2xl text-red-600">
        缺点：会消耗内存并使初始渲染稍慢一些
      </div>
      <div className="flex gap-2">
        <pre className="flex-1 text-sm">
          <code
            className="fragment semi-fade-out jsx"
            data-trim
            data-line-numbers
          >
            <script
              type="text/template"
              dangerouslySetInnerHTML={{
                __html: `const Parent = () => {
  const value == useMemo(() => ({ value }), []);
  /** Child没有被React.memo包裹，
   * 上面的useMemo没有意义，反而会增加开销 */
  return <Child value={value} />
  };
};`,
              }}
            />
          </code>
        </pre>
        <pre className="flex-1 text-sm">
          <code className="fragment fade-in jsx" data-trim data-line-numbers>
            <script
              type="text/template"
              dangerouslySetInnerHTML={{
                __html: `const MemoChild = React.memo(Child);
const Parent = () => {
  /** value会被缓存 */
  const value == useMemo(() => ({ value }), [])
  /** MemoChild不会re-render */
  return <MemoChild value={value} />
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

export default UseMemoAndMemo;
