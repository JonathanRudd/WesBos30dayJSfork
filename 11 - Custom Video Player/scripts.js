// define all const with player.querySelector()
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

// functions
function togglePlay() {
  if(video.paused) {
    video.play();
  } else {
    video.pause();
  }
}


// call event listeners on video.

video.addEventListener('click', togglePlay)
toggle.addEventListener('click', togglePlay)
