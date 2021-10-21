window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

// function getCurrentUIValues() {
//   return {
//     amount: +(document.getElementById("loan-amount").value),
//     years: +(document.getElementById("loan-years").value),
//     rate: +(document.getElementById("loan-rate").value),
//   }
// }

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  
  var amountPH = document.getElementById("loan-amount").getAttribute('placeholder');
  var yearsPH = document.getElementById("loan-years").getAttribute('placeholder');
  var ratePH = document.getElementById("loan-rate").getAttribute('placeholder');
  
  document.getElementById("loan-amount").value = parseInt(amountPH);
  document.getElementById("loan-years").value = parseInt(yearsPH);
  document.getElementById("loan-rate").value = Math.round(ratePH * 100) / 100;
  
  var amount = document.getElementById("loan-amount").value;
  var years = document.getElementById("loan-years").value;
  var rate = document.getElementById("loan-rate").value;

  if (amount > 0 && years > 0 && rate > 0) {
    var equation = (amount * (rate / 12)) / (1 - ((1 + (rate / 12))**(-(years * 12))));
    var payment = Math.round(equation * 100) / 100;

    calculateMonthlyPayment(amount, years, rate);
    updateMonthly(payment);

  } else {
    updateMonthly("N/A");
  }
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  //getCurrentUIValues();
  var amount = document.getElementById("loan-amount").value;
  var years = document.getElementById("loan-years").value;
  var rate = document.getElementById("loan-rate").value;  

  if (amount > 0 && years > 0 && rate > 0) {
    var equation = (amount * (rate / 12)) / (1 - ((1 + (rate / 12))**(-(years * 12))));
    var payment = Math.round(equation * 100) / 100;
  
    calculateMonthlyPayment(amount, years, rate);
    updateMonthly(payment);

  } else {
    updateMonthly("N/A");
  }
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(amount, years, rate) {

    var equation = (amount * (rate / 12)) / (1 - ((1 + (rate / 12))**(-(years * 12))));
    var mp = Math.round(equation * 100) / 100;

  return mp;
  
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(random) {
  document.getElementById("monthly-payment").innerText = random;
}
