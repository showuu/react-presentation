const RenderIntro = () => {
  return (
    <>
      <section>
        <div className="r-stack">
          <div className="fragment fade-out" data-fragment-index="3">
            <p className="fragment semi-fade-out" data-fragment-index="1">
              初始渲染
            </p>
            <p className="fragment grow" data-fragment-index="2">
              重新渲染
            </p>
          </div>
          <div className="fragment fade-in">
            <p className="fragment semi-fade-out">必要的重新渲染</p>
            <p className="fragment grow">
              <span className="fragment highlight-red">不必要的重新渲染</span>
            </p>
          </div>
        </div>
        <aside className="notes">
          <p>初始渲染 当组件首次出现在屏幕上时发生</p>
          <p>重新渲染 已经在屏幕上的组件的第二次和任何连续渲染</p>
          <p>
            必要的重新渲染
            重新渲染作为更改源的组件，或直接使用新信息的组件。例如，如果用户在输入字段中键入内容，则管理其状态的组件需要在每次击键时更新自身，即重新渲染。
          </p>
          <p>
            必要的重新渲染
            重新渲染作为更改源的组件，或直接使用新信息的组件。例如，如果用户在输入字段中键入内容，则管理其状态的组件需要在每次击键时更新自身，即重新渲染。
          </p>
        </aside>
      </section>
      <section>
        <div className="fragment">避免/减少不必要的重新渲染</div>
      </section>
    </>
  );
};

export default RenderIntro;
