const quadrado = document.getElementById("quadrado");
let pontuacao = 0;
const pontuacaoMaxima = 10;

quadrado.addEventListener("click", function() {
  pontuacao++;
  document.getElementById("pontuacao").textContent = `Pontuação: ${pontuacao}`;

  const randomX = Math.floor(Math.random() * (window.innerWidth - 100));
  const randomY = Math.floor(Math.random() * (window.innerHeight - 100));
  quadrado.style.left = `${randomX}px`;
  quadrado.style.top = `${randomY}px`;

  if (pontuacao === pontuacaoMaxima) {
    alert("Parabéns, você ganhou o jogo!");
    pontuacao = 0;
    document.getElementById("pontuacao").textContent = "Pontuação: 0";
  }
});

function detectarColisao() {
  const quadradoX = parseInt(quadrado.style.left);
  const quadradoY = parseInt(quadrado.style.top);

  if (quadradoX <= 0 || quadradoX >= window.innerWidth - 100 || quadradoY <= 0 || quadradoY >= window.innerHeight - 100) {
    alert("Game over!");
    pontuacao = 0;
    document.getElementById("pontuacao").textContent = "Pontuação: 0";
  }
}

setInterval(detectarColisao, 10);
