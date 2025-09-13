// Atualiza hora em tempo real
function atualizarHora() {
  const agora = new Date();
  document.getElementById("hora").textContent =
    agora.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
}
setInterval(atualizarHora, 1000);
atualizarHora();

// Detecta página atual e define ação da barrinha
document.addEventListener("DOMContentLoaded", () => {
  const homeBar = document.getElementById("homeBar");
  if (homeBar) {
    homeBar.addEventListener("click", () => {
      const paginaAtual = window.location.pathname.split("/").pop();

      if (paginaAtual === "home.html") {
        // Se estiver na home, volta para tela de bloqueio
        window.location.href = "index.html";
      } else {
        // Se estiver em apps/configurações, volta para home
        window.location.href = "home.html";
      }
    });
  }
});
