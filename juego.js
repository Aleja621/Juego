const personaje = localStorage.getItem("personaje");
let vidasJugador = parseInt(localStorage.getItem("vidasJugador"));
let vidasEnemigo = parseInt(localStorage.getItem("vidasEnemigo"));
const resultado = document.getElementById("resultado");
const vidas = document.getElementById("vidas");

document.getElementById("personaje").textContent = "Jugando como: " + personaje;
actualizarVidas();

const frases = {
  "Cthulhu": "Ganarte fue más fácil que pronunciar mi nombre.",
  "Nyarlathotep": "Esto fue teatro. Tú fuiste mi escena favorita.",
  "Azathoth": "No fue combate. Fue indiferencia.",
  "Protagonista Lovecraftiano™": "Gané... creo. Aunque ahora el suelo respira."
};

const combate = {
  "Locura Cósmica": "Caos Abisal",
  "Manipulación": "Locura Cósmica",
  "Caos Abisal": "Manipulación"
};

function ataque(ataqueJugador) {
  const ataques = ["Locura Cósmica", "Manipulación", "Caos Abisal"];
  const ataqueCPU = ataques[Math.floor(Math.random() * 3)];

  if (ataqueJugador === ataqueCPU) {
    resultado.innerHTML = `Empate: Ambos usaron ${ataqueJugador}.`;
  } else if (combate[ataqueJugador] === ataqueCPU) {
    vidasEnemigo--;
    resultado.innerHTML = `Ganaste esta ronda con ${ataqueJugador} vs ${ataqueCPU}<br>${frases[personaje]}`;
  } else {
    vidasJugador--;
    resultado.innerHTML = `Perdiste esta ronda con ${ataqueJugador} vs ${ataqueCPU}<br>${frases["Nyarlathotep"]}`;
  }

  localStorage.setItem("vidasJugador", vidasJugador);
  localStorage.setItem("vidasEnemigo", vidasEnemigo);
  actualizarVidas();

  if (vidasJugador === 0 || vidasEnemigo === 0) {
    document.getElementById("botonFinal").style.display = "inline-block";
  }
}

function actualizarVidas() {
  const tentaculo = (n) => "🐙".repeat(n) + ` (${n})`;
  vidas.innerHTML = `Tus vidas: ${tentaculo(vidasJugador)}<br>Vidas del enemigo: ${tentaculo(vidasEnemigo)}`;
}

function irAFinal() {
  window.location.href = "final.html";
}
