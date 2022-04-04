/* eslint no-eval: 0 */
import { React, useState } from "react";
/* import words from "lodash.words"; */
import Functions from "./components/Functions";
import Numbers from "./components/Numbers";
import MathOperations from "./components/MathOperations";
import Result from "./components/Result";
import "./App.css";

const App = () => {
  const [stack, setStack] = useState("0");
  const [result, setResult] = useState("");

  const onClickEqualFunction = () => {
    const resultOperation = eval(stack).toString();
    console.log(resultOperation);
    setStack(resultOperation);
    setResult(`${stack} =`);
    if (resultOperation == stack) {
      setResult(`Ans = ${stack}`);
    }
  };

  const onDeleteFunction = () => {
    if (stack.length > 0) {
      const newstack = stack.substring(0, stack.length - 1);
      setStack(newstack);
      if (newstack.length == 0) {
        setStack("0");
      }
    }
  };

  return (
    <main className="react-calculator">
      <Result result={stack} operation={result} />

      <div className="functions">
        <Functions
          onDelete={onDeleteFunction}
          onContentClear={() => {
            setStack("0");
            setResult("");
          }}
        />
      </div>

      <div className="numbers">
        <Numbers
          onClickNumber={(number) =>
            stack == "0" ? setStack(number) : setStack(`${stack}${number}`)
          }
        />
      </div>

      <div className="math-operations">
        <MathOperations
          onClickOperation={(operation) => {
            setStack(`${stack}${operation}`);
          }}
          onClickEqual={onClickEqualFunction}
        />
      </div>
    </main>
  );
};

export default App;
