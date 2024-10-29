class footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `
    <footer>
      <p>&copy; 2022 Steak Angkringan. All rights reserved.</p>
    </footer>
    `;
  }
}

customElements.define('footer-component', footer);
