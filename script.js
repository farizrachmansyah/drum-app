function app() {
    window.addEventListener("load", () => {
        const sounds = document.querySelectorAll(".sound");
        const pads = document.querySelectorAll(".padKey");

        pads.forEach((pad, index) => {
            pad.addEventListener("click", function () {
                sounds[index].play();
                sounds[index].currentTime = 0;  // rewind to the start (bikin audionya bisa diklik berkali kali)

                pad.classList.add("drum");

                pad.addEventListener("transitionend", () => {
                    pad.classList.remove("drum");
                });
            });
        });
    });

    window.addEventListener("keydown", function (e) {
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        const key = document.querySelector(`.padKey[data-key="${e.keyCode}"]`);

        if (!audio && !key) return;

        audio.play();
        audio.currentTime = 0;

        key.classList.add("drum");

        key.addEventListener("transitionend", () => {
            key.classList.remove("drum");
        });
    });
}

app();
