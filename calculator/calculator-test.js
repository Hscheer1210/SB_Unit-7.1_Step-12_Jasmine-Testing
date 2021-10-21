
beforeEach(function() {
  amount = 8000;
  years = 4;
  rate = 0.03;
})

it('should calculate the monthly payment correctly', function () {
  // ...
  expect(calculateMonthlyPayment(amount, years, rate)).toEqual(177.07);
  expect(calculateMonthlyPayment(amount, years, rate)).not.toBeNaN();
});

it('should anticipate null values', function () {
  // ... 
  expect(calculateMonthlyPayment(0, years, rate)).toBe(0);
  expect(calculateMonthlyPayment('', years, rate)).toBe(0);
  expect(calculateMonthlyPayment(amount, 0, rate)).toBePositiveInfinity();
  expect(calculateMonthlyPayment(amount, '', rate)).toBePositiveInfinity();
  expect(calculateMonthlyPayment(amount, years, 0)).toBeNaN();
  expect(calculateMonthlyPayment(amount, years, '')).toBeNaN();
})

it("should return a result with 2 decimal places", function() {
  // ..
  expect(calculateMonthlyPayment(amount, years, rate)).toMatch(calculateMonthlyPayment(amount, years, rate).toFixed(2));
});

/// etc
