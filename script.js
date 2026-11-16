
const infoButton = document.getElementById("infoButton");
const extraInfo = document.getElementById("extraInfo");

const likeButton = document.getElementById("likeButton");
const likeCount = document.getElementById("likeCount");

// Mostrar e ocultar informações
infoButton.addEventListener("click", function() {

    extraInfo.classList.toggle("active");

    if (extraInfo.classList.contains("active")) {
        infoButton.textContent = "Ocultar informações";
    } else {
        infoButton.textContent = "Ver mais informações";
    }

});

// Sistema de curtidas
let likes = 0;

likeButton.addEventListener("click", function() {

    likes++;

    likeCount.textContent = likes;

});
