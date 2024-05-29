let inputElement = document.querySelector('.input-display');

function runFunction(input) {
  inputElement.value += input;
}

function calculateFunction() {
  try {        
    inputElement.value = eval(inputElement.value);
  } catch (error) {
    inputElement.value = "error";
  }
  
}

function clearFunction() {
  inputElement.value = '';
}

