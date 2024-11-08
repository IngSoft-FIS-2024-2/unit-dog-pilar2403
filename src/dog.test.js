import { beforeEach, describe, expect, test } from '@jest/globals';
import Dog from './dog.js';

describe('Dog class tests', () => {
  let dog;

  beforeEach(() => {
    dog = new Dog('Buddy', 'Golden Retriever', 2, 'Golden');
  });

  test('Dog can bark', () => {
    expect(dog.bark()).toBe('Woof! Woof!');
  });

  test('Dog can learnTrick vacio', () => {
    let truco = dog.learnTrick('');
    let expectedErrorMessage = 'Trick cannot be empty';
    expect(() => dog.learnTrick(truco)).toThrow(expectedErrorMessage);
  });
});
