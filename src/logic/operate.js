import Big from 'big.js';

function operate(numberOne, numberTwo, operation) {
  const one = Big(numberOne);
  const two = Big(numberTwo);
  if (operation === '+') {
    return one.plus(two).toString();
  }
  if (operation === '-') {
    return one.minus(two).toString();
  }
  if (operation === 'x') {
    return one.times(two).toString();
  }
  if (operation === '÷') {
    try {
      return one.div(two).toString();
    } catch (error) {
      return "Can't divide by 0.";
    }
  }
  if (operation === '%') {
    try {
      return one.mod(two).toString();
    } catch (error) {
      return "Can't divide by 0.";
    }
  }
  throw Error('Unknown operation');
}

export default operate;
