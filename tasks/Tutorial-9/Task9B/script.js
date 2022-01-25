const form = document.getElementById("form");
const firstNumber = document.getElementById("firstNumber");
const operation = document.getElementById("operation");
const secondNumber = document.getElementById("secondNumber");
const result = document.getElementById("result");

function sendFormData(event) {
  getResult({ 
    firstNumber: firstNumber.value,
    operation: operation.value,
    secondNumber: secondNumber.value,
  });
  event.preventDefault();
}

function getResult(data) {
   let request = new XMLHttpRequest();
   request.open("GET",`http://www.localhost:3000?firstNumber=${data.firstNumber}&operation=${data.operation}&secondNumber=${data.secondNumber}`);
   request.setRequestHeader("Content-Type", "application/json");
   request.setRequestHeader("Access-Control-Allow-Origin", "*");
   request.onload = function () {
    result.innerHTML = JSON.parse(request.responseText).value;
  };
   request.send(data);
}

form.addEventListener("submit",sendFormData);