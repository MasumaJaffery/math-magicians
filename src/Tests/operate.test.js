import operate from '../logic/operate';

describe('operate', () => {
  it('adds two numbers', () => {
    expect(operate(1, 2, '+')).toBe('3');
  });

  it('subtracts two numbers', () => {
    expect(operate(5, 2, '-')).toBe('3');
  });

  it('multiply two numbers', () => {
    expect(operate(5, 2, 'x')).toBe('10');
  });

  it('divide two numbers', () => {
    expect(operate(10, 5, '÷')).toBe('2');
  });

  it('module two numbers', () => {
    expect(operate(8, 4, '%')).toBe('0');
  });
});
/** Tada! */
