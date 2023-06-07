function updateTime() {
  var dt = new Date();
  document.getElementById("datetime").innerHTML = dt.toLocaleString();
}

setInterval(updateTime, 1000);

function verificaLogin() {
  document
    .querySelector(".login-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      var username = document.getElementById("username").value;
      var password = document.getElementById("password").value;

      if (username === "Admin" && password === "123456") {
        window.location.href =
          "https://www.unicef.org/brazil/comunicados-de-imprensa/relatorio-da-onu-numeros-globais-de-fome-subiram-para-cerca-de-828-milhoes-em-2021";
      } else {
        alert("Login incorreto. Por favor, tente novamente.");
      }
    });
}

function alterarCor() {
  var body = document.body;
  var corBranca = getComputedStyle(body).getPropertyValue("--cor-branca");
  var corPreta = getComputedStyle(body).getPropertyValue("--cor-preta");

  if (corBranca === "white") {
    body.style.setProperty("--cor-branca", "black");
    localStorage.setItem('darkMode', 'true');
  } else {
    body.style.setProperty("--cor-branca", "white");
    localStorage.setItem('darkMode', 'false');
  }

  if (corPreta === "black") {
    body.style.setProperty("--cor-preta", "white");
  } else {
    body.style.setProperty("--cor-preta", "black");
  }
}

function verificarDarkMode() {
  var body = document.body;
  if(localStorage.getItem('darkMode') === 'true'){
    body.style.setProperty("--cor-branca", "black");
    body.style.setProperty("--cor-preta", "white");
  }
}

window.onload = function() {
  verificarDarkMode();
  var alterarCorBtn = document.getElementById("alterarCorBtn");
  alterarCorBtn.addEventListener("click", alterarCor);
};
