import { alphabet } from "./alphabet.js";

export function addCard() {
    const cardList = document.getElementById("card");


    cardList.innerHTML = "";

    alphabet.forEach(letter => {

        const div = document.createElement("div");

        div.className = "card alphabet-card shadow-sm";

        div.innerHTML = `
            <img
                src="https://www.unir.net/wp-content/uploads/2025/01/Que-es-una-ONG-y-que-hace2.webp"
                class="card-img-top alphabet-image"
                alt="Avión"
            >

            <div class="card-body text-center">
                <h1 class="display-4 fw-bold text-primary">
                    ${letter.letter}
                </h1>

                <h5 class="card-title">
                    Avión
                </h5>
            </div>
        `;

        cardList.appendChild(div);
    });
}