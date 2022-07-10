const player = $("#bb-radio");
const playControl = player.find("[data-play]");
let audioState = false;
const main = new Audio("http://cob-ais.leanstream.co/CINDFM");


playControl.on("click", (e) => {
  e.preventDefault();
  togglePlay();
});


function togglePlay() {
  player.toggleClass("bb-playing");
  if (audioState) {
    main.pause();
  } else {
    main.play();
  }
  audioState = !audioState;
}

