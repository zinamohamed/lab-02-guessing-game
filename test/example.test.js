// IMPORT MODULES under test here:

import { compareNumbers } from '../utils.js';

const test = QUnit.test;

test('tests if 6 is greater than 5', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 1;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = compareNumbers(6, 5);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('tests if 5 is less than 6', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = - 1;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = compareNumbers(5, 6);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('tests if 6 is equal to than 6', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 0;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = compareNumbers(6, 6);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
