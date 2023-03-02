const RenderReason = () => {
  return (
    <>
      <section className="flex flex-col gap-2">
        <div className="mb-24">引起重新渲染的原因</div>
        <div className="fragment fade-in-then-semi-out m-3">
          组件内部状态变化
        </div>
        <div className="fragment fade-in-then-semi-out m-3">父组件重新渲染</div>
        <div className="fragment fade-in-then-semi-out m-3">Context值变化</div>
        <div className="fragment fade-in-then-semi-out m-3">
          组件使用的hooks内状态变化
        </div>
        <div className="fragment fade-in m-3">
          <span className="fragment highlight-red m-3">Props变化</span>
        </div>
      </section>
    </>
  );
};
export default RenderReason;
