const ListAndKey = () => {
  return (
    <section>
      <div className="mb-10">提高列表的重新渲染性能</div>

      <div className="fragment fade-in flex gap-2">
        <pre className="flex-1 text-sm">
          <code
            className="fragment semi-fade-out jsx"
            data-trim
            data-line-numbers
          >
            <script
              type="text/template"
              dangerouslySetInnerHTML={{
                __html: `const Component = () => {
  return (
    <>
    {list.map((item) => (
      /** 仅有key不会阻止re-render */
      <Child key={item.id} item={item} />
    ))}
    </>
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
                __html: `const MemoChild = memo(Child);

const Component = () => {
  return (
    <>
    {list.map((item) => (
      /** key结合memo使用才能提高性能 */
      <MemoChild key={item.id} item={item} />
    ))}
    </>
  };
};`,
              }}
            />
          </code>
        </pre>
      </div>
      <div className="m-4 text-xl">
        <div className="fragment fade-in mb-4">
          如果列表是静态的（不删除、插入、排序），可以使用数组inedx作为key
        </div>
        <div className="fragment fade-in mb-4">
          动态列表上使用数组index会导致
        </div>
        <div className="fragment fade-in mb-4">
          若列表里包含非受控的表单输入，会出现错误
        </div>
        <div className="fragment fade-in mb-4">
          若列表项组件被memo包裹，则缓存失效，会触发re-render
        </div>
      </div>
    </section>
  );
};

export default ListAndKey;
