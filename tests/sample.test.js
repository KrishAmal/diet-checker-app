const fetchMessage = require('../js/sample');

test('fetches "Carpe Diem', () => {
  expect(fetchMessage()).toBe("Carpe Diem");
});