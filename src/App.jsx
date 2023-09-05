import { useState } from "react";
import GridLayout from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

// eslint-disable-next-line react/prop-types
function Card({ children, isSelected, onClick }) {
  return (
    <div
      className={`border border-gray-400 rounded p-5 h-20  w-full ${
        isSelected
          ? "!border-green-500 !text-green-800 font-semibold cursor-not-allowed"
          : "cursor-pointer"
      }`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

function App() {
  const [state, setState] = useState({
    a: true,
    b: false,
    c: true,
  });

  return (
    <div className="flex">
      <div className="bg-gray-50 h-screen w-[1000px] relative shadow-inner">
        <GridLayout cols={12} rowHeight={100} width={1000}>
          {state["a"] ? (
            <div
              key="a"
              className="w-10 h-[50px] bg-white border border-gray-300 shadow rounded p-5"
              data-grid={{ x: 0, y: 0, w: 6, h: 1 }}
            >
              Component A
            </div>
          ) : null}

          {state["b"] ? (
            <div
              key="b"
              className="w-10 h-[50px] bg-white border border-gray-300 shadow rounded p-5"
              data-grid={{ x: 0, y: 0, w: 6, h: 1 }}
            >
              Component B
            </div>
          ) : null}

          {state["c"] ? (
            <div
              key="c"
              className="w-10 h-[50px] bg-white border border-gray-300 shadow rounded p-5"
              data-grid={{ x: 0, y: 0, w: 6, h: 1 }}
            >
              Component C
            </div>
          ) : null}
        </GridLayout>
      </div>

      <div className="p-5">
        <div>Select Widget</div>
        <div className="space-y-5 mt-3">
          <Card
            isSelected={state["a"]}
            onClick={() => setState((prev) => ({ ...prev, a: !prev.a }))}
          >
            Component A
          </Card>
          <Card
            isSelected={state["b"]}
            onClick={() => setState((prev) => ({ ...prev, b: !prev.b }))}
          >
            Component B
          </Card>
          <Card
            isSelected={state["c"]}
            onClick={() => setState((prev) => ({ ...prev, c: !prev.c }))}
          >
            Component C
          </Card>
        </div>
      </div>
    </div>
  );
}

export default App;
