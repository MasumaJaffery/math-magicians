import React from 'react';
import './style.css';
import AppTitle from './AppTitle';

function Calculator() {
  return (
    <div>
      <AppTitle />
      <div className="calculator">
        <div className="display">
          <input type="number" placeholder="0" />
        </div>
        <CalcBtn value="A/C" />
        <CalcBtn value="+/-" />
        <CalcBtn value="%" />
        <CalcBtn className="operator" value="/" />

        <CalcBtn value="7" />
        <CalcBtn value="8" />
        <CalcBtn value="9" />
        <CalcBtn className="operator" value="*" />

        <CalcBtn value="4" />
        <CalcBtn value="5" />
        <CalcBtn value="6" />
        <CalcBtn className="operator" value="-" />

        <CalcBtn value="1" />
        <CalcBtn value="2" />
        <CalcBtn value="3" />
        <CalcBtn className="operator" value="+" />

        <CalcBtn className="spanbtn" value="0" />
        <CalcBtn value="." />
        <CalcBtn className="operator" value="=" />
      </div>
    </div>
  );
}
function CalcBtn(props) {
  return (
  /* eslint-disable react/jsx-one-expression-per-line */
    // eslint-disable-next-line react/destructuring-assignment, react/prop-types
    <button type="button" className={props.className}> {props.value}</button>
  );
}
export default Calculator;
