const burgerInitiator = {
  init({ button, drawer, content, burgerBox }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer, burgerBox);
    });

    content.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
    });
  },

  _toggleDrawer(event, drawer, burgerBox) {
    event.stopPropagation();
    drawer.classList.toggle('open', burgerBox.checked);
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('open');
  },
};

export default burgerInitiator;
