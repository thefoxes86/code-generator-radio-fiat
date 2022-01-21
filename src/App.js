import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let arrayResult = new Array(4);
  const [result, setResult] = useState();
  const [value, setValue] = useState();

  const calculateCode = (e) => {
    let number = e.target.value;

    let array = number.split("");
    array.forEach((element, index) => {
      switch (index) {
        case 0:
          arrayResult[3] = 10 - element;

          break;
        case 1:
          arrayResult[2] = 9 - element;
          break;
        case 2:
          arrayResult[1] = 9 - element;
          break;
        case 3:
          arrayResult[0] = 9 - element;
          break;
      }
    });
    number.toString().length === 4 ? setResult(arrayResult) : setResult();
  };

  // const onKeyUpChange = (e) => {
  //   e.target.valueAsNumber.toString().length >= 4
  //     ? (e.target.disabled = false)
  //     : "";
  // };

  return (
    <div className="App">
      <header className="App-header">
        <h2>Type the last 4 digits of the Radio Serial Number/N</h2>
        <p>Valid Only for QUBO, FIORINO (Radio Daiichi)</p>
        <p>
          <input
            className="inputType"
            type="text"
            maxLength={4}
            onChange={calculateCode}
          />
        </p>
        <p>Code: {result}</p>
      </header>
    </div>
  );
}

export default App;
