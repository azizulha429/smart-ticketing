function totalCost(elementId, value) {
  const totalCost = document.getElementById(elementId).innerText;
  const convertedTotalCost = parseInt(totalCost);
  const sum = convertedTotalCost + parseInt(value);
  setInnerText(elementId, sum)
}

function setInnerText(id, value) {
  document.getElementById(id).innerText = value;
}



