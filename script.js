let error = document.querySelector('.error');
let costInfo = document.querySelector('.cost-info');
let cost = document.querySelector('.cost');

let price = document.querySelector('#price');
let people = document.querySelector('#people');
let tip = document.querySelector('#tip');

let countBtn = document.querySelector('.count');

countBtn.addEventListener('click', showBill);

function showBill() {
  if (price.value == '' || people.value == '') {
    error.style.display = 'block';
    costInfo.style.display = 'none';
  } else if (tip.value == 0) {
    calculateBill();
  } else {
    calculateBillWithTip();
  }
}

function calculateBill() {
  let bill = Number(price.value) / Number(people.value);
  costInfo.style.display = 'block';
  error.style.display = 'none';
  cost.textContent = bill.toFixed(2);
}

function calculateBillWithTip() {
  let BillWithTip =
    (Number(price.value) + Number(price.value) * Number(tip.value)) /
    Number(people.value);
  costInfo.style.display = 'block';
  error.style.display = 'none';
  cost.textContent = BillWithTip.toFixed(2);
}
