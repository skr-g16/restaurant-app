import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';
import burgerInitiator from '../utils/burger-initiator';
class App {
  constructor({ button, drawer, content, burgerBox }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;
    this._burgerBox = burgerBox;

    this._initialAppShell();
  }

  _initialAppShell() {
    burgerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
      burgerBox: this._burgerBox,
    });
  }
  async renderPage() {
    const url = UrlParser.parseActiveWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
