class heroContainer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="hero-container">
        <picture>
          <source type="image/webp" media="(max-width: 600px)" srcset="./images/heros/hero-image_1-small.webp">
          <img src="./images/heros/hero-image_1-large.webp" type="image/webp" alt="" class="hero-image" />
        </picture>
        <div class="hero-content">
          <h2 tabindex="0">Steak Angkringan</h2>
          <p tabindex="0">Pedagang Kaki Lima <br />Rasa Bintang Lima</p>
        </div>
      </div>
    `;
  }
}
customElements.define('hero-container', heroContainer);
