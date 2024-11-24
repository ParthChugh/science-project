document.getElementById("math-operations-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const operation = document.getElementById("operation").value;
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);

  let result;

  switch (operation) {
    case "add":
      result = num1 + num2;
      break;
    case "subtract":
      result = num1 - num2;
      break;
    case "multiply":
      result = num1 * num2;
      break;
    case "divide":
      result = num2 !== 0 ? num1 / num2 : "Error: Cannot divide by zero.";
      break;
    case "square":
      result = num1 * num1;
      break;
    case "cube":
      result = num1 * num1 * num1;
      break;
    default:
      result = "Invalid operation.";
  }

  document.getElementById("operation-result").textContent = `Result: ${result}`;
});

// LCM and HCF Handler
document.getElementById("lcm-hcf-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const num1 = parseInt(document.getElementById("num1-lcm").value);
  const num2 = parseInt(document.getElementById("num2-lcm").value);

  const hcf = (a, b) => (!b ? a : hcf(b, a % b));
  const lcm = (a, b) => (a * b) / hcf(a, b);

  const resultHCF = hcf(num1, num2);
  const resultLCM = lcm(num1, num2);

  document.getElementById("lcm-hcf-result").textContent = `HCF: ${resultHCF}, LCM: ${resultLCM}`;
});

// Show/Hide Input Fields Based on Operation
document.getElementById("operation").addEventListener("change", function () {
  const selectedOperation = this.value;
  const num2Field = document.getElementById("num2");
  const num2Label = document.getElementById("num2-label");

  if (selectedOperation === "square" || selectedOperation === "cube") {
    num2Field.style.display = "none";
    num2Label.style.display = "none";
  } else {
    num2Field.style.display = "block";
    num2Label.style.display = "block";
  }
});