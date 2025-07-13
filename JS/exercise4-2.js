function _isValidNumber(num) {
  if (num % 1 === 0) {
    return 0 < num && num < 10;
  }
  return false;
}

function multiplicationTable(num) {
  let result = Array();
  for (let i = 1; i < 10; i++) {
    let string = num + "x" + i + "=" + num * i;
    result.push(string);
  }
  return result;
}

function displayTimes() {
  const number = document.getElementById("number").value;
  const parsedNumber = parseInt(number);
  const resultContainer = document.getElementById("times-result");
  if (_isValidNumber(parsedNumber)) {
    const result = document.createElement("p");
    const tableArr = multiplicationTable(parsedNumber);
    result.innerText = tableArr.join("\n");
    resultContainer.appendChild(result);
  } else {
    window.alert("Input Error!");
  }
}
