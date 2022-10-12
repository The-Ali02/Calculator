import "./App.css";
import React from "react";
import ReactDom from "react";
import { useState } from "react";
function App() {
  const [result, setResult] = useState("");
  const handleClick = (event) => {
    setResult(result.concat(event.target.name));
  };
  const clear = (event) => {
    setResult("");
  };
  const backSpace = (event) => {
    setResult(result.slice(0, -1)); // or use substring method
  };
  const output = () => {
    try {
      setResult(eval(result).toString());
    } catch (Exception) {
      setResult("ERROR");
    }
  };
  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1>Calculator</h1>
        </header>
      </div>

      <div className="con">
        <form>
          <input type="text" value={result} />
        </form>

        <div class="btns">
          <button className="pretty" onClick={clear} id="clear">
            Clear
          </button>
          <button className="pretty" onClick={backSpace}>
            C
          </button>
          <button className="pretty" name="/" onClick={handleClick}>
            &divide;
          </button>
          <button name="7" onClick={handleClick}>
            7
          </button>
          <button name="8" onClick={handleClick}>
            8
          </button>
          <button name="9" onClick={handleClick}>
            9
          </button>
          <button className="pretty" name="*" onClick={handleClick}>
            &times;
          </button>
          <button name="4" onClick={handleClick}>
            4
          </button>
          <button name="5" onClick={handleClick}>
            5
          </button>
          <button name="6" onClick={handleClick}>
            6
          </button>
          <button className="pretty" name="-" onClick={handleClick}>
            &minus;
          </button>
          <button name="1" onClick={handleClick}>
            1
          </button>
          <button name="2" onClick={handleClick}>
            2
          </button>
          <button name="3" onClick={handleClick}>
            3
          </button>
          <button className="pretty" name="+" onClick={handleClick}>
            +
          </button>

          <button name="0" onClick={handleClick}>
            0
          </button>
          <button name="." onClick={handleClick}>
            .
          </button>
          <button className="pretty" id="res" onClick={output}>
            =
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
