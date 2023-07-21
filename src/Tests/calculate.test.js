import calculate from '../logic/calculate';

describe('calculate', () => {
  it('resets the calculator', () => {
    const calculator = { total: '5', next: '3', operation: '+' };
    expect(calculate(calculator, 'AC')).toEqual({ total: null, next: null, operation: null });
  });

  it('decimal fraction', () => {
    const calculator = { total: '5', next: '3', operation: '.' };
    expect(calculate(calculator, '.')).toEqual({ total: '5', next: '3.', operation: '.' });
  });

  it('Toggle Add and Minus', () => {
    const calculator = { total: null, next: '3', operation: '+/-' };
    expect(calculate(calculator, '+/-')).toEqual({ total: null, next: '-3', operation: '+/-' });
  });

  it('Equal with no operation', () => {
    const calculator = { total: '5', next: '5', operation: null };
    expect(calculate(calculator, '=')).toEqual({});
  });
});

/** Tada! */
