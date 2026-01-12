(function (global) {
  const operant1 = document.getElementById("op1");
  const operant2 = document.getElementById("op2");
  const resDisplay = document.getElementById("res");
  const contentDiv = document.getElementById("content");

  const setResult = (msg) => {
    resDisplay.textContent = "Result: " + msg;
  };

  const toRadians = (degrees) => degrees * (Math.PI / 180);

  const clearHelp = () => { contentDiv.innerHTML = ""; };

document.getElementById("add-button").addEventListener("click", function () {
  clearHelp();
  var val1 = parseFloat(operant1.value);
  var val2 = parseFloat(operant2.value);
  setResult(val1 + val2);
});

document.getElementById("sub-button").addEventListener("click", function () {
  clearHelp();
  var val1 = parseFloat(operant1.value);
  var val2 = parseFloat(operant2.value);
  setResult(val1 - val2);
});

document.getElementById("mul-button").addEventListener("click", function () {
  clearHelp();
  var val1 = parseFloat(operant1.value);
  var val2 = parseFloat(operant2.value);
  setResult(val1 * val2);
});

document.getElementById("div-button").addEventListener("click", function () {
  clearHelp();
  var val1 = parseFloat(operant1.value);
  var val2 = parseFloat(operant2.value);

  if (val2 === 0) {
    setResult("Operand 2 is 0");
  } else {
    setResult(val1 / val2);
  }
});

  const handleExtendedFunction = (type) => {
    const val1 = parseFloat(operant1.value);
    
    if (type === 'log') {
      if (val1 <= 0) {
        setResult("operand 1 Bad");
        clearHelp();
        return;
      }
      setResult(Math.log(val1));
    } else if (type === 'sin') {
      setResult(Math.sin(toRadians(val1)));
    } else if (type === 'tan') {
      setResult(Math.tan(toRadians(val1)));
    }

    global.$ajaxUtils.sendGetRequest(`data/${type}.json`, (data) => {
      contentDiv.innerHTML = `
        <h3>${data.name}</h3>
        <img src="images/${data.image_name}" alt="${data.name}" style="max-width: 200px; display: block; margin: 10px 0;">
        <p>${data.description}</p>
      `;
    }, true);
  };

  document.getElementById("log-button").addEventListener("click", () => handleExtendedFunction('log'));
  document.getElementById("sin-button").addEventListener("click", () => handleExtendedFunction('sin'));
  document.getElementById("tan-button").addEventListener("click", () => handleExtendedFunction('tan'));

})(window);