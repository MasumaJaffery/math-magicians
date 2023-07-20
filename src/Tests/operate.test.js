import operate from '../logic/operate';


describe('operate', () => {
  it('adds two numbers', () => {
    expect(operate(1, 2, '+')).toBe("3");
  });

  it('subtracts two numbers', () => {
    expect(operate(5, 2, '-')).toBe("3");
  });

  it('multiplies two numbers', () => {
    expect(operate(5, 2, 'x')).toBe("10");
  });

  it('divides two numbers', () => {
    expect(operate(6, 3, '÷')).toBe("2");
  });

  it('returns the remainder of division of two numbers', () => {
    expect(operate(10, 3, '%')).toBe("1");
  });

  // it('throws an error for division by zero', () => {
  //   expect(() => operate(5, 0, '÷')).toThrow('Division by 0 is undefined');
  // });
});