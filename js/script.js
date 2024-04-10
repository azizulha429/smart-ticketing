const allBtn = document.getElementsByClassName('all-btn');
let count = 40;
let selectSet = 0;
for (const btn of allBtn) {
  btn.addEventListener('click', function (e) {
    count = count - 1;
    selectSet = selectSet + 1;
    if (selectSet > 4) {
      alert('Must be needed 4 ticket')
      return
    }
    const seat = e.target.innerText;
    const seatPrice = document.getElementById('seat-price').innerText;
    const selectContainer = document.getElementById('tbody');
    const tr = document.createElement('tr');
    const td = document.createElement('td');
    td.innerText = seat;
    const td2 = document.createElement('td');
    td2.innerText = 'Economy';
    const td3 = document.createElement('td');
    td3.innerText = seatPrice;
    tr.appendChild(td)
    tr.appendChild(td2)
    tr.appendChild(td3)
    selectContainer.appendChild(tr)
    e.target.style.backgroundColor = '#1DD100'
    const selectSeatItem = document.getElementById('select-seat-total').innerText;
    const fiftyCoupon = document.getElementById('fifty').innerText;
    const twentyCoupon = document.getElementById('twenty').innerText;
    const couponCode = document.getElementById('input-field').value;
    if (selectSeatItem == 3) {
      
      document.getElementById("apply-btn").removeAttribute('disabled')
      document.getElementById("apply-btn").style.backgroundColor = '#1DD100'
    }
  
    const grandTotalString = document.getElementById('grand-total').innerText;
    const grandTotalCost = parseInt(grandTotalString);
    if (grandTotalCost >= 0) {
      document.getElementById("next-btn").removeAttribute('disabled')
    }
    totalCost('total-amount', parseInt(seatPrice))
    totalCost('grand-total', parseInt(seatPrice))
    setInnerText('total-seat', count)
    setInnerText('select-seat-total', selectSet)
  })
}

document.getElementById('apply-btn').addEventListener('click', function () {
  const inputField = document.getElementById('input-field');
  let couponValue = inputField.value;
  const discountField = document.getElementById('discount-amount');
  const totalPrice = document.getElementById('total-amount');
  const productPriceElement = parseInt(totalPrice.innerText);
  if (couponValue === 'NEW15') {
    const discountPrice = parseFloat(productPriceElement * .15).toFixed(2);
    discountField.innerText = discountPrice;
    const totalPriceSet = productPriceElement - discountPrice;
    document.getElementById('grand-total').innerText = totalPriceSet;
  } else if (couponValue === 'Couple20') {
    const discountPrice = parseFloat(productPriceElement * .20).toFixed(2);
    discountField.innerText = discountPrice;
    const totalPriceSet = productPriceElement - discountPrice;
    document.getElementById('grand-total').innerText = totalPriceSet;
  } else {
    alert('Invalid Coupon')
  }
  showElementById('discount')
  hideElementById('apply-input')
})

