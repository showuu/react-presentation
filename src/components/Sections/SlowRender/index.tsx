import { ChangeEvent, memo, useState } from "react";
import HeavyComponent from "../../HeavyComponent";

const MemoHeavyComponent = memo(HeavyComponent);

const NonPerformant = memo(() => {
  const [color, setColor] = useState("red");
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
  };
  return (
    <>
      <input
        className="text-black text-xl"
        value={color}
        onChange={onChange}
        placeholder="请输入颜色"
      />
      <div className="m-2" style={{ color }}>
        我的颜色可以改变
      </div>
      <HeavyComponent />
    </>
  );
});

const Performant = memo(() => {
  const [color, setColor] = useState("red");
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
  };
  return (
    <>
      <input
        className="text-black text-xl"
        value={color}
        onChange={onChange}
        placeholder="请输入颜色"
      />
      <div className="m-2" style={{ color }}>
        我的颜色可以改变
      </div>
      <MemoHeavyComponent />
    </>
  );
});
const SlowRender = () => {
  return (
    <section>
      <section>
        <NonPerformant />
      </section>
      <section>
        <Performant />
      </section>
    </section>
  );
};

export default SlowRender;
