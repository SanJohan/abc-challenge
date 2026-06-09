import { alphabet } from "./alphabet.js";

export function addCard() {
  const cardList = document.getElementById("card");

  cardList.innerHTML = "";

  alphabet.forEach((letter) => {
    const div = document.createElement("div");

    div.className = "card alphabet-card shadow-sm";

    div.innerHTML = `
      <img
        src="${letter.image}"
        class="card-img-top alphabet-image"
        alt="${letter.letter}"
      >

      <div class="card-body text-center">
        <h1 class="display-4 fw-bold text-primary">
          ${letter.letter}
        </h1>

        <button
          data-audio="${letter.audio}"
          class="btn btn-primary play-btn">
          Escuchar audio
        </button>
      </div>
    `;

    cardList.appendChild(div);
  });
}


document.addEventListener("click", (e) => {
  if (e.target.classList.contains("play-btn")) {
    const rutaAudio = e.target.dataset.audio;

    const audio = new Audio(rutaAudio);
    audio.play();
  }
});
