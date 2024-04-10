function totalCost(elementId, value) {
  const totalCost = document.getElementById(elementId).innerText;
  const convertedTotalCost = parseInt(totalCost);
  const sum = convertedTotalCost + parseInt(value);
  setInnerText(elementId, sum)
}

function setInnerText(id, value) {
  document.getElementById(id).innerText = value;
}

function hideElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add('hidden');
}
function showElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove('hidden');
}



