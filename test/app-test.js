// Bring in the chai assertion library, mocha, and app.js file
const {assert} = require('chai');
const { describe, it } = require('mocha');
const { isPerfectSquare } = require('../app');
const app = require('../app');


// Write tests function below this line
describe('-', () => {
    it('returns true if input is a perfect square', () => {
      const num = 16;
      const result = isPerfectSquare(num);
      const expected = true;
      
      
      // Write assertion here
      assert.ok(result, expected);
    });
  });