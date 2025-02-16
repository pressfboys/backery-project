function showLoveMessage() {
  document.getElementById('love-message').style.display = 'block';
}

function closeLoveMessage() {
  document.getElementById('love-message').style.display = 'none';
}

let lastHeartTime = 0;

document.addEventListener('mousemove', function (e) {
  const now = Date.now();

  if (now - lastHeartTime > 100) {
    lastHeartTime = now;

    const heart = document.createElement('span');
    heart.classList.add('floating-heart');
    heart.innerHTML = '❤️';
    document.body.appendChild(heart);

    const size = Math.random() * 20 + 10;
    heart.style.fontSize = `${size}px`;

    heart.style.left = `${e.clientX}px`;
    heart.style.top = `${e.clientY}px`;

    setTimeout(() => {
      heart.remove();
    }, 1000);
  }
});

const playPauseBtn = document.getElementById('play-pause-btn');
const music = document.getElementById('background-music');

playPauseBtn.addEventListener('click', () => {
  if (music.paused) {
    music.play();
    playPauseBtn.innerHTML = '❚❚';
  } else {
    music.pause();
    playPauseBtn.innerHTML = '🎵';
  }
});
