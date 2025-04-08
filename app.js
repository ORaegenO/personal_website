

//parallax effect
window.addEventListener('scroll', function () {
    let scrollPosition = window.scrollY;
    const parallax = document.querySelector('.parallax');
    parallax.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
  });


