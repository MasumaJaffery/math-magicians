import calculate from '../logic/calculate';

describe('calculate', () => {
  it('resets the calculator', () => {
    const calculator = { total: '5', next: '3', operation: '+' };
    expect(calculate(calculator, 'AC')).toEqual({ total: null, next: null, operation: null });
  });

  // Add more tests for other calculator operations
});
