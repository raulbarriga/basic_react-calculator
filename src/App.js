import React, { useState } from "react";

const App = () => {
  const [operations, setOperations] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    setOperations(operations.concat(e.target.value));
    console.log("operations: ", operations);
  };

  const clear = () => {
    setOperations("");
    setResult("")
  };

  const backspace = () => {
    setOperations(operations.slice(0, -1));
  };

  const handleResult = () => {
    try {
      // eslint-disable-next-line no-eval
      setResult(eval(operations))
    } catch (error) {
      setResult("Error")
    }
  }

  return (
    // from https://codepen.io/tirsolecointere/pen/BayJqzG?editors=1010
    <div className="calculator">
      <div className="calculator__screen">
        <h6 className="calculator__operation">{operations}</h6>
        <h5 className="calculator__result">{result}</h5>
      </div>
      <div className="calculator__buttons">
        <button onClick={clear} type="button" className="btn highlight">
          C
        </button>
        <button
          type="button"
          onClick={handleClick}
          value="/"
          className="btn highlight"
        >
          ÷
        </button>
        <button
          value="*"
          onClick={handleClick}
          type="button"
          className="btn highlight"
        >
          x
        </button>
        <button type="button" onClick={backspace} className="btn">
          <svg
            width="20"
            height="12"
            viewBox="0 0 20 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.141 1.2L1.67588 6L6.141 10.8H18.75V1.2H6.141ZM5.5814 12L0 6L5.5814 0H20V12H5.5814Z"
              fill="#6B8AFA"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M9.17574 3.17574C9.41005 2.94142 9.78995 2.94142 10.0243 3.17574L14.8243 7.97574C15.0586 8.21005 15.0586 8.58995 14.8243 8.82426C14.5899 9.05858 14.2101 9.05858 13.9757 8.82426L9.17574 4.02426C8.94142 3.78995 8.94142 3.41005 9.17574 3.17574Z"
              fill="#6B8AFA"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14.8243 3.17574C14.5899 2.94142 14.2101 2.94142 13.9757 3.17574L9.17574 7.97574C8.94142 8.21005 8.94142 8.58995 9.17574 8.82426C9.41005 9.05858 9.78995 9.05858 10.0243 8.82426L14.8243 4.02426C15.0586 3.78995 15.0586 3.41005 14.8243 3.17574Z"
              fill="#6B8AFA"
            />
          </svg>
        </button>
        <button value="7" type="button" className="btn" onClick={handleClick}>
          7
        </button>
        <button value="8" type="button" className="btn" onClick={handleClick}>
          8
        </button>
        <button value="9" type="button" className="btn" onClick={handleClick}>
          9
        </button>
        <button
          type="button"
          onClick={handleClick}
          value="-"
          className="btn highlight"
        >
          -
        </button>
        <button value="4" type="button" className="btn" onClick={handleClick}>
          4
        </button>
        <button value="5" type="button" className="btn" onClick={handleClick}>
          5
        </button>
        <button value="6" type="button" className="btn" onClick={handleClick}>
          6
        </button>
        <button
          type="button"
          onClick={handleClick}
          value="+"
          className="btn highlight"
        >
          +
        </button>
        <button value="1" type="button" className="btn" onClick={handleClick}>
          1
        </button>
        <button value="2" type="button" className="btn" onClick={handleClick}>
          2
        </button>
        <button value="3" type="button" className="btn" onClick={handleClick}>
          3
        </button>
        <button
          onClick={handleResult}
          type="button"
          className="btn equal"
        >
          =
        </button>
        <button onClick={handleClick} type="button" value="%" className="btn">
          %
        </button>
        <button value="0" type="button" className="btn" onClick={handleClick}>
          0
        </button>
        <button onClick={handleClick} type="button" value="." className="btn">
          .
        </button>
      </div>
    </div>
  );
};

export default App;
