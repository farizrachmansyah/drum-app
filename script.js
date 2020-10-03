window.addEventListener("load", () => {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector(".visual");
    const colors = ["#60d394", "#d36060", "#c060d3", "#d3d160", "#6860d3", "#60bcd3"];

    pads.forEach((pad, index) => {
        pad.addEventListener("click", function () {
            sounds[index].play();
            sounds[index].currentTime = 0;

            // createBubbles(index);

            pad.style.animation = "equalizer 100ms";

            pad.addEventListener("animationend", function () {
                pad.style.animation = "";
            });
        });
    });

    // functions to make the bubbles
    // under constructions

    // const createBubbles = (index) => {
    //     const bubbles = document.createElement("div");
    //     visual.appendChild(bubbles);
    //     bubbles.style.backgroundColor = colors[index];
    //     bubbles.style.animation = "jump 1s";

    //     bubbles.addEventListener("animationend", function () {
    //         bubbles.style.animation = "";
    //     });
    // };


});
