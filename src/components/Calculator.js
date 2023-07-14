import { useState } from 'react';
import './style.css';
import CalculatorTitle from './AppTitle';
import calculate from '../logic/calculate';

function Calculator() {
  const [display, setdisplay] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (buttonName) => {
    setdisplay((Operand) => calculate(Operand, buttonName));
  };

  return (
    <div>
      <CalculatorTitle />

      <div className="calculator">
        <div className="display">
          <div className="current-operand">{display.next || display.total || '0'}</div>
        </div>
        <button type="button" onClick={() => handleClick('AC')}>AC</button>
        <button type="button" onClick={() => handleClick('+/-')}>+/-</button>
        <button type="button" onClick={() => handleClick('%')}>%</button>
        <button type="button" className="operator" onClick={() => handleClick('÷')}>÷</button>
        <button type="button" onClick={() => handleClick('7')}>7</button>
        <button type="button" onClick={() => handleClick('8')}>8</button>
        <button type="button" onClick={() => handleClick('9')}>9</button>
        <button type="button" className="operator" onClick={() => handleClick('x')}>x</button>
        <button type="button" onClick={() => handleClick('4')}>4</button>
        <button type="button" onClick={() => handleClick('5')}>5</button>
        <button type="button" onClick={() => handleClick('6')}>6</button>
        <button type="button" className="operator" onClick={() => handleClick('-')}>-</button>
        <button type="button" onClick={() => handleClick('1')}>1</button>
        <button type="button" onClick={() => handleClick('2')}>2</button>
        <button type="button" onClick={() => handleClick('3')}>3</button>
        <button type="button" className="operator" onClick={() => handleClick('+')}>+</button>
        <button type="button" className="spanbtn" onClick={() => handleClick('0')}>0</button>
        <button type="button" onClick={() => handleClick('.')}>.</button>
        <button type="button" className="operator" onClick={() => handleClick('=')}>=</button>
      </div>
    </div>
  );
}

export default Calculator;
