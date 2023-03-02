const Summary = () => {
  return (
    <section>
      <div className="mb-8">总结</div>
      <div className="flex flex-col gap-6 text-2xl mb-8 text-rose-500">
        <div>不要在渲染函数中创建组件</div>
        <div>没有被memo包裹的组件props不要用useMemo缓存</div>
        <div>不要使用随机值作为列表中的key</div>
      </div>
      <div className="fragment flex flex-col gap-6 text-2xl text-emerald-500">
        <div>组件拆分到单个文件中使状态独立</div>
        <div>
          使用React.memo结合useMemo/useCallback缓存非基础类型的props防止重复渲染
        </div>
        <div>合理选择key结合React.memo以提高列表的性能</div>
      </div>
    </section>
  );
};

export default Summary;
