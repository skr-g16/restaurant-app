class navbar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <header class="nav-container">
      <nav class="navbar" id="navbar">
        <picture>
          <source type="image/webp" media="(max-width: 600px)" srcset="./images/logo/logo_trans-small.webp">
          <img src="./images/logo/logo_trans-large.webp" type="image/webp" alt="Logo Steak Angkringan" class="logo"/>
        </picture>
        <label tabindex="0" class="burger" for="burger">
          <input type="checkbox" id="burger" />
          <span></span>
          <span></span>
          <span></span>
        </label>
        <ul class="nav-links">
          <li><a href="index.html">Home</a></li>
          <li><a href="#/favorite">Favorite</a></li>
          <li>
            <a href="https://github.com/skr-g16" target="_blank" rel="noopener"
              >About Us</a
            > 
          </li>
        </ul>
      </nav>
    </header>
    `;
  }
}

customElements.define('navbar-component', navbar);
