function burgerAcces() {
  const burger = document.querySelector('.burger');
  const navLinks = document.querySelector('.nav-links');

  burger.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      const burgerCheckbox = burger.querySelector('#burger');
      burgerCheckbox.checked = !burgerCheckbox.checked;
      navLinks.classList.toggle('open', burgerCheckbox.checked);
    }
  });

  burger.addEventListener('click', () => {
    const burgerCheckbox = burger.querySelector('#burger');
    navLinks.classList.toggle('open', burgerCheckbox.checked);
  });
}
export default burgerAcces;
