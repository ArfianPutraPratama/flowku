const title = document.querySelector('.title')
const text = 'I Have Something'.split('')
for (let index = 0; index < text.length; index++) {
  if (text[index] !== ' ') {
    title.innerHTML += `<span>${text[index]}<span/>`
  } else {
    title.innerHTML += `<span style='margin-right: 20px;'><span/>`
  }
}

const textElements = document.querySelectorAll('.title span');
textElements.forEach((element) => {
  const randomDelay = Math.random() * 3; // Menghasilkan delay acak antara 0 hingga 3 detik
  element.style.animationDelay = `${randomDelay}s`;
});

document.getElementById('openButton').addEventListener('click', function(event) {
  event.preventDefault(); // Mencegah link default
  var audio = document.getElementById('backgroundMusic');
  
  // Coba putar audio, dan tangani error
  audio.play().then(() => {
    console.log("Audio started successfully");
  }).catch((error) => {
    console.error("Error playing audio:", error);
  });

  // Redirect ke halaman flower.html setelah 1 detik
  setTimeout(function() {
    window.location.href = 'flower.html';
  }, 1000);
});
