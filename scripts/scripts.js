const video = document.getElementById('video');
const videoContainer = document.querySelector('.video-container');

function adjustVideoHeight() {
  const windowHeight = window.innerHeight;
  const videoHeight = videoContainer.offsetHeight;
  
  if (windowHeight < videoHeight) {
    video.style.height = windowHeight + 'px';
  } else {
    video.style.height = 'auto';
  }
}

window.addEventListener('resize', adjustVideoHeight);
