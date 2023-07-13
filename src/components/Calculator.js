import React, { useState } from 'react';
import './style.css';
import AppTitle from './AppTitle';

function Calculator() {
  const [display, setdisplay] = useState({
    current: '0',
    total: '0',
    isintial: true,
  });
  function handleNumber(value) {
    let NewValue = value;
    if (!display.isintial) {
      NewValue = display.current + value;
    }
    setdisplay({ current: NewValue, total: display.total, isintial: false });
  }
  function handleOperator() {
  }
  function render() {
    return display.current;
  }
  return (
    <div>
      <AppTitle />
      <div className="calculator">
        <div className="display">
          {render()}
        </div>
        <CalcBtn value="A/C" onClick={() => handleOperator('A/C')} />
        <CalcBtn value="+/-" onClick={() => handleOperator('+/-')} />
        <CalcBtn value="%" onClick={() => handleOperator('%')} />
        <CalcBtn className="operator" value="/" onClick={() => handleOperator('/')} />

        <CalcBtn value="7" onClick={() => handleNumber('7')} />
        <CalcBtn value="8" onClick={() => handleNumber('8')} />
        <CalcBtn value="9" onClick={() => handleNumber('9')} />
        <CalcBtn className="operator" value="*" onClick={() => handleOperator('*')} />

        <CalcBtn value="4" onClick={() => handleNumber('4')} />
        <CalcBtn value="5" onClick={() => handleNumber('5')} />
        <CalcBtn value="6" onClick={() => handleNumber('6')} />
        <CalcBtn className="operator" value="-" onClick={() => handleOperator('-')} />

        <CalcBtn value="1" onClick={() => handleNumber('1')} />
        <CalcBtn value="2" onClick={() => handleNumber('2')} />
        <CalcBtn value="3" onClick={() => handleNumber('3')} />
        <CalcBtn className="operator" value="+" onClick={() => handleOperator('+')} />

        <CalcBtn className="spanbtn" value="0" onClick={() => handleNumber('0')} />
        <CalcBtn value="." onClick={() => handleNumber('.')} />
        <CalcBtn className="operator" value="=" onClick={() => handleOperator('=')} />
      </div>
    </div>
  );
}
function CalcBtn(props) {
  return (
  /* eslint-disable react/jsx-one-expression-per-line */
    // eslint-disable-next-line react/destructuring-assignment, react/prop-types
    <button type="button" className={props.className} onClick={() => props.onClick(props.value)}> {props.value}</button>
  );
}
export default Calculator;
