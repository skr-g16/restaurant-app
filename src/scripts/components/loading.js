class Loading extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `
    <div id="loading-indicator" class="loading-container">
      <div class="loading-circle"></div>
      <p>Loading...</p>
    </div>
    <div id="feedback-message" class="feedback-container" style="display: none;"></div>
    `;
  }
}
customElements.define('loading-component', Loading);
