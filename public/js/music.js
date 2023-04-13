let playing = false;
var playBtn = document.getElementById("playBtn");

var wavesurfer = WaveSurfer.create({
  container: "#waveform",
  waveColor: "#fff",
  progressColor: "#0ef",
  barWidth: 4,
  responsive: true,
  height: 30,
  barRadius: 3,
  barGap: 3,
  barWidth: 1,
});

wavesurfer.load("/media/NiwelTakayama.mp3");

playBtn.onclick = function () {
  playing = !playing;
  wavesurfer.playPause();
  playBtn.src = playing
    ? (playBtn.src = "/img/pause.png")
    : (playBtn.src = "/img/play.png");
};

// Autoplay
// wavesurfer.on('ready', () => {
//     playBtn.click();
// });

wavesurfer.on("finish", () => {
  playing = false;
  playBtn.src = playBtn.src = "/img/play.png";
});
