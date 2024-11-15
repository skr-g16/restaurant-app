const burgerInitiator = {
  init({ button, drawer, content, burgerBox }) {
    button.setAttribute('tabindex', '0');
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer, burgerBox);
    });

    button.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        this._toggleDrawer(event, drawer, burgerBox);
      }
    });

    content.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
      burgerBox.checked = false;
    });
  },

  _toggleDrawer(event, drawer, burgerBox) {
    event.stopPropagation();
    burgerBox.checked = !burgerBox.checked;
    drawer.classList.toggle('open', burgerBox.checked);
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('open');
  },
};

export default burgerInitiator;
