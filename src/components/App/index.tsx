import { useEffect, useRef } from "react";
import Reveal from "reveal.js";
import "reveal.js/dist/reveal.css";
// @ts-ignore
import Highlight from "reveal.js/plugin/highlight/highlight.esm.js";
// @ts-ignore
import Markdown from "reveal.js/plugin/markdown/markdown.esm.js";
// @ts-ignore
import Notes from "reveal.js/plugin/notes/notes.esm.js";
import "../../styles/plugin/highlight/dracula.css";
import "../../styles/theme/dracula.css";
import ChildrenPattern from "../Sections/ChildrenPattern";
import ComponentAsProps from "../Sections/ComponentAsProps";
import ComponentSplitting from "../Sections/ComponentSplitting";
import ListAndKey from "../Sections/ListAndKey";
import MemoChildPattern from "../Sections/MemoChildPattern";
import ParentUpdate from "../Sections/ParentUpdate";
import RemountPattern from "../Sections/RemountPattern";
import RenderFunctionPattern from "../Sections/RenderFunctionPattern";
import RenderIntro from "../Sections/RenderIntro";
import RenderReason from "../Sections/RenderReason";
import SlowRender from "../Sections/SlowRender";
import Summary from "../Sections/Summary";
import UseMemoAndMemo from "../Sections/UseMemoAndMemo";
import styles from "./index.module.css";

const App = () => {
  const RevealRef = useRef(false);
  useEffect(() => {
    if (!RevealRef.current) {
      Reveal.initialize({
        plugins: [Markdown, Highlight, Notes],
      });
      RevealRef.current = true;
    }
  }, []);
  return (
    <div className={styles.app}>
      <div className="reveal">
        <div className="slides">
          <section>React代码性能优化</section>
          <section>为什么要做优化？</section>
          <SlowRender />
          <RenderIntro />
          <RenderReason />
          <ChildrenPattern />
          <MemoChildPattern />
          <RenderFunctionPattern />
          <ComponentSplitting />
          <ComponentAsProps />
          <ParentUpdate />
          <RemountPattern />
          <UseMemoAndMemo />
          <ListAndKey />
          <Summary />
        </div>
      </div>
    </div>
  );
};

export default App;
