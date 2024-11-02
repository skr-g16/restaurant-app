import anime from 'animejs';

function startLoadingAnimation() {
  document.getElementById('loading-indicator').style.display = 'flex';
  anime({
    targets: '.loading-circle',
    rotate: '1turn',
    easing: 'easeInOutSine',
    duration: 1000,
    loop: true,
  });
}

function stopLoadingAnimation() {
  document.getElementById('loading-indicator').style.display = 'none';
}

function showErrorFeedback(message) {
  const feedbackMessage = document.getElementById('feedback-message');
  feedbackMessage.textContent = message;
  feedbackMessage.style.display = 'block';

  setTimeout(() => {
    feedbackMessage.style.display = 'none';
  }, 3000);
}

export { startLoadingAnimation, stopLoadingAnimation, showErrorFeedback };
