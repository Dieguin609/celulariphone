let expression = "";

function press(val) {
  expression += val;
  document.getElementById("display").innerText = expression;
}

function calculate() {
  try {
    const res = eval(expression);
    document.getElementById("display").innerText = res;
    expression = res.toString();
  } catch {
    document.getElementById("display").innerText = "Erro";
    expression = "";
  }
}

function clearDisplay() {
  expression = "";
  document.getElementById("display").innerText = 0;
}

function voltarHome() {
  window.location.href = "../home.html";
}
