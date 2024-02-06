import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
    let [result,setResult] = useState("");

    const clear = () => {
        setResult("");
    };
    const backspace = () => {
        setResult(result.slice(0,-1));
    };

    const handleClick = (e) => {
            if (result.length >= 16 ){
                setResult("Huge Input");
                setTimeout(() => {
                    setResult("");
                },500);
                return;
            }
            setResult(result.concat(e.target.name));
    };

    const calculate = () => {
        try {
            result = eval(result).toString();
            if (result.includes(".")) {
              result = +eval(result);
              result = result.toFixed(4).toString();
            } else {
              result = eval(result).toString();
            }
            setResult(result);
          } catch (err) {
            setResult("Error");
          }
    };

  return (
    
    <div className="container">
        <input type="text" value={result}/>
        <div className="keypad">
            <button className="color" onClick={clear} id="clear">
                Clear
            </button>
            <button className="color" onClick={backspace} id="backspace">
                C
            </button>
            <button name ="+" onClick={handleClick}>
                +
            </button>
            <button name ="/" onClick={handleClick}>
                &divide;
            </button>
            <button name ="7" onClick={handleClick}>
                7
            </button>
            <button name ="8" onClick={handleClick}>
                8
            </button>
            <button name ="9" onClick={handleClick}>
                9
            </button>
            <button name ="*" onClick={handleClick}>
                &times;
            </button>
            <button name ="4" onClick={handleClick}>
                4
            </button>
            <button name ="5" onClick={handleClick}>
                5
            </button>
            <button name ="6" onClick={handleClick}>
                6
            </button>
            <button name ="-" onClick={handleClick}>
                -
            </button>
            <button name ="1" onClick={handleClick}>
                1
            </button>
            <button name ="2" onClick={handleClick}>
                2
            </button>
            <button name ="3" onClick={handleClick}>
                3
            </button>
            <button name ="+" onClick={handleClick}>
                +
            </button>
            <button name ="0" onClick={handleClick}>
                0
            </button>
            <button name ="." onClick={handleClick}>
                .
            </button>
            <button className ="equal" onClick={calculate} id="result">
                =
            </button>
        </div>
     </div>
  );
};

export default Calculator;
