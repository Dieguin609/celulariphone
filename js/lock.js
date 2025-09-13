// Seletores principais
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const swipeText = document.getElementById("swipe-text");
const pinSection = document.getElementById("pin-section");
const pinDisplay = document.getElementById("pin-display");
const keys = document.querySelectorAll(".pin-pad .key");
const bigClock = document.querySelector(".big-clock");
const bottomIcons = document.querySelector(".bottom-icons");
const chargeStatus = document.querySelector(".charge-status"); // texto 100% carregado

let enteredPin = "";

// ===== Relógio =====
function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();

  hoursEl.textContent = String(hours).padStart(2, "0");
  minutesEl.textContent = String(minutes).padStart(2, "0");
}
setInterval(updateClock, 1000);
updateClock();

// ===== Animação do "Deslize para abrir" =====
function animateSwipeText() {
  swipeText.style.opacity = swipeText.style.opacity === "0" ? "1" : "0.3";
}
setInterval(animateSwipeText, 800);

// ===== Criar notificação =====
let notification = document.createElement("div");
notification.className = "pin-notification";
notification.textContent = "Erro: digite a senha novamente";
pinSection.appendChild(notification);

// Função para mostrar a notificação acima do campo de digitação
function showNotification() {
  notification.style.bottom = "240px"; // posiciona acima do pin-display
  notification.classList.add("show");
  setTimeout(() => {
    notification.classList.remove("show");
  }, 1500); // some após 1,5s
}

// ===== Mostrar teclado ao deslizar =====
swipeText.addEventListener("click", () => {
  swipeText.style.display = "none";
  pinSection.style.display = "block";

  // Esconde relógio, ícones e texto de carga
  bigClock.style.display = "none";
  bottomIcons.style.display = "none";
  chargeStatus.style.display = "none";

  // Sobe e centraliza o campo dos pontinhos
  pinDisplay.style.top = "150px"; // sobe um pouco mais
  pinDisplay.style.left = "50%"; // centraliza horizontalmente
  pinDisplay.style.transform = "translateX(-50%)";
});

// ===== Sistema de senha =====
keys.forEach(key => {
  key.addEventListener("click", () => {
    const value = key.textContent;

    if (value === "←") {
      enteredPin = enteredPin.slice(0, -1);
    } else if (value === "✓") {
      if (enteredPin === "1234") {
        // Senha correta → abre home.html
        window.location.href = "home.html";
      } else {
        // Senha incorreta → mostra notificação
        showNotification();
      }
      // Reseta a senha na tela
      enteredPin = "";
      pinDisplay.textContent = "•••";
    } else {
      if (enteredPin.length < 4) {
        enteredPin += value;
      }
    }

    // Atualiza os pontos na tela
    pinDisplay.textContent = "•".repeat(enteredPin.length);
  });
});
