'use strict';

function multiBracketValidation(input) {
  input.split('').forEach(element => {
    if (!input.length) return false;
    else if (element === '(' && element !== ')') return false;
    else if (element === '{' && element !== '}') return false;
    else if (element === '[' && element !== ']') return false;
    else return true;
  });
}
multiBracketValidation();


describe('multi-bracket-validation', () => {

  it('boolean for if bracket has a closing pair', () => {
    const yes = ('(', ')' || '{', '}' || '[', ']');
    const no = ('(' || '{' || '[');
    expect().toContain(yes).toBe(true);
    expect().toContain(no).toBe(false);
  });
});
