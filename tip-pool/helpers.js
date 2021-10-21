
// accepts 'tipAmt', 'billAmt', 'tipPercent' and sums total from allPayments objects
function sumPaymentTotal(type) {
  let total = 0;

  for (let key in allPayments) {
    let payment = allPayments[key];

    total += Number(payment[type]);
  }

  return total;
}

// converts the bill and tip amount into a tip percent
function calculateTipPercent(billAmt, tipAmt) {
  return Math.round(100 / (billAmt / tipAmt));
}

// expects a table row element, appends a newly created td element from the value
function appendTd(tr, value) {
  let newTd = document.createElement('td');
  newTd.innerText = value;

  tr.append(newTd);
}

// creates a td button with the value 'X', and deletes the associated tr when clicked
function appendDeleteBtn(tr, type) {
  let newTd = document.createElement('td');
  newTd.classname = 'deleteBtn';
  newTd.innerText = 'X';

  newTd.addEventListener('click', removeButton);

  tr.append(newTd);
}

function removeButton(e) {
  let btn = e.target.closest('tr');

  delete allServers[btn.id];
  btn.parentNode.removeChild(btn);
  updateServerTable();
}