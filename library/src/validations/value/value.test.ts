import { describe, expect, test } from 'vitest';
import { value } from './value.ts';

describe('value', () => {
  test('should pass only valid values', () => {
    const validate1 = value(3);
    const value1 = 3;
    expect(validate1(value1).output).toBe(value1);

    const validate2 = value('test');
    const value2 = 'test';
    expect(validate2(value2).output).toBe(value2);

    expect(validate1(2).issue).toBeTruthy();

    expect(validate1(2).issue).toBeTruthy();
    expect(validate1(4).issue).toBeTruthy();
    expect(validate2('tes').issue).toBeTruthy();
    expect(validate2('testx').issue).toBeTruthy();
  });

  test('should return custom error message', () => {
    const error = 'Value is not "10"!';
    const validate = value(10, error);
    expect(validate(123).issue?.message).toBe(error);
  });
});
