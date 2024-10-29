class heroContainer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="hero-container">
        <img src="./images/heros/hero-image_1.jpg" alt="" class="hero-image" />
        <div class="hero-content">
          <h2 tabindex="0">Steak Angkringan</h2>
          <p tabindex="0">Pedagang Kaki Lima <br />Rasa Bintang Lima</p>
        </div>
      </div>
    `;
  }
}
customElements.define('hero-container', heroContainer);
