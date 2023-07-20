import operate from '../logic/operate';

describe('operate', () => {
  it('adds two numbers', () => {
    expect(operate(1, 2, '+')).toBe("3");
  });

  it('subtracts two numbers', () => {
    expect(operate(5, 2, '-')).toBe("3");
  });

  // Add more tests for multiplication, division, etc.
});
