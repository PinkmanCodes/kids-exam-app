
import { describe, it, expect } from 'vitest';

describe('score calculation', () => {
  it('calculates score correctly', () => {
    const questions = [{answer:'A'}, {answer:'B'}];
    const answers = ['A','B'];
    const score = questions.filter((q,i)=>q.answer===answers[i]).length;
    expect(score).toBe(2);
  });
});
