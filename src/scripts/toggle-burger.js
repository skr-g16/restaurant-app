function toggleBurger() {
  const burger = document.getElementById('burger');
  const navLinks = document.querySelector('.nav-links');

  burger.addEventListener('change', () => {
    if (burger.checked) {
      navLinks.classList.add('open');
    } else {
      navLinks.classList.remove('open');
    }
  });
}
export default toggleBurger;
