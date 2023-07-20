import calculate from '../logic/calculate';

describe('calculate', () => {
  it('resets the calculator when "AC" is clicked', () => {
    const calculator = { total: '5', next: '3', operation: '+' };
    expect(calculate(calculator, 'AC')).toEqual({ total: null, next: null, operation: null });
  });

  it('adds two numbers when "+" is clicked', () => {
    let calculator = { total: '5', next: '3', operation: '+' };
    calculator = calculate(calculator, '=');
    expect(calculator).toEqual({ total: '8', next: null, operation: null });
  });

  it('subtracts two numbers when "-" is clicked', () => {
    let calculator = { total: '5', next: '3', operation: '-' };
    calculator = calculate(calculator, '=');
    expect(calculator).toEqual({ total: '2', next: null, operation: null });
  });

  it('multiplies two numbers when "x" is clicked', () => {
    let calculator = { total: '5', next: '3', operation: 'x' };
    calculator = calculate(calculator, '=');
    expect(calculator).toEqual({ total: '15', next: null, operation: null });
  });

  it('divides two numbers when "÷" is clicked', () => {
    let calculator = { total: '6', next: '3', operation: '÷' };
    calculator = calculate(calculator, '=');
    expect(calculator).toEqual({ total: '2', next: null, operation: null });
  });

  it('changes the sign of the number when "+/-" is clicked', () => {
    let calculator = { total: '5', next: null, operation: null };
    calculator = calculate(calculator, '+/-');
    expect(calculator).toEqual({ total: '-5', next: null, operation: null });
  });

  // it('converts a number to a percentage when "%" is clicked', () => {
  //   let calculator = { total: '50', next: null, operation: null };
  //   calculator = calculate(calculator, '%');
  //   expect(calculator).toEqual({ total: '0.5', next: null, operation: null });
  // });

  // it('adds a decimal point to the number when "." is clicked', () => {
  //   let calculator = { total: '5', next: null, operation: null };
  //   calculator = calculate(calculator, '.');
  //   expect(calculator).toBe({ total: '5.', next: null, operation: null });
  // });

  // it('updates the total when a number is clicked', () => {
  //   let calculator = { total: null, next: null, operation: null };
  //   calculator = calculate(calculator, '5');
  //   expect(calculator).toEqual({ total: '5', next: null, operation: null });
  // });

  it('updates the next value when a number is clicked after an operation', () => {
    let calculator = { total: '5', next: null, operation: '+' };
    calculator = calculate(calculator, '3');
    expect(calculator).toEqual({ total: '5', next: '3', operation: '+' });
  });

  it('calculates the result when "=" is clicked', () => {
    let calculator = { total: '5', next: '3', operation: '+' };
    calculator = calculate(calculator, '=');
    expect(calculator).toEqual({ total: '8', next: null, operation: null });
  });
});