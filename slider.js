const images = [
    "home.jpg",
    "home2.jpg",
    "home3.jpg",
    "home4.jpg",
    "home5.jpg",
    "home6.jpg",
];

let currentImage = 0;

setInterval(() => {
    currentImage++;

    if (currentImage >= images.length) {
        currentImage = 0;
    }

    document.querySelector(".banner").style.backgroundImage =
        `linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${images[currentImage]})`;

}, 3000);
