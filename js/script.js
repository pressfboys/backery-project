function showLoveMessage() {
  document.getElementById('love-message').style.display = 'block';
}

function closeLoveMessage() {
  document.getElementById('love-message').style.display = 'none';
}

// Эффект всплывающих сердечек при движении мыши
let lastHeartTime = 0; // Переменная для контроля частоты появления сердечек

document.addEventListener('mousemove', function (e) {
  const now = Date.now();

  if (now - lastHeartTime > 100) {
    // Сердечки появляются не чаще, чем раз в 100 мс
    lastHeartTime = now;

    const heart = document.createElement('span');
    heart.classList.add('floating-heart');
    heart.innerHTML = '❤️';
    document.body.appendChild(heart);

    // Устанавливаем случайный размер сердечка
    const size = Math.random() * 20 + 10; // от 10px до 30px
    heart.style.fontSize = `${size}px`;

    // Устанавливаем позицию сердечка
    heart.style.left = `${e.clientX}px`;
    heart.style.top = `${e.clientY}px`;

    // Удаляем сердечко через 1 секунду
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
    playPauseBtn.innerHTML = '❚❚'; // Меняем иконку на паузу
  } else {
    music.pause();
    playPauseBtn.innerHTML = '🎵'; // Иконка воспроизведения
  }
});
