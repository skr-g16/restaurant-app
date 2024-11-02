class formReview extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
  <form id="review-form">
    <h3 tabindex="0">Add Review</h3>
    <div class="form-group">
      <label for="name">Name</label>
      <input id="name" class="input" type="text" placeholder="Your Name" />
    </div>
    <div class="form-group">
      <label for="review">Review</label>
      <textarea id="review" class="input" placeholder="Your Review"></textarea>
    </div>
    <button id="submit-review">Submit</button>
  </form>
  `;
  }
}

customElements.define('form-review', formReview);
