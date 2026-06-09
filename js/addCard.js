import { alphabet } from "./alphabet.js";

export function addCard() {
  const cardList = document.getElementById("card");

  cardList.innerHTML = "";

  alphabet.forEach((letter) => {
    const div = document.createElement("div");

    div.className = "card alphabet-card shadow-sm";
    div.dataset.view = "letter";

    renderLetter();

    function renderLetter() {
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
    }

    function renderAnimal() {
      div.innerHTML = `
        <img
          src="${letter.animalImage}"
          class="card-img-top alphabet-image"
          alt="${letter.animal}"
        >

        <div class="card-body text-center">
          <h2 class="fw-bold text-success">
            ${letter.animal}
          </h2>

          <button
            data-audio="${letter.audio}"
            class="btn btn-primary play-btn">
            Escuchar audio
          </button>
        </div>
      `;
    }

    div.addEventListener("click", (e) => {
      if (e.target.classList.contains("play-btn")) {
        return;
      }

      if (div.dataset.view === "letter") {
        renderAnimal();
        div.dataset.view = "animal";
      } else {
        renderLetter();
        div.dataset.view = "letter";
      }
    });

    cardList.appendChild(div);
  });
}

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("play-btn")) {
    const audio = new Audio(e.target.dataset.audio);
    audio.play();
  }
});