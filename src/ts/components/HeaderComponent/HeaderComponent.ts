import Component from "../Component/Component";

class HeaderComponent extends Component {
  constructor(parentElement: Element) {
    super(parentElement, "main-header", "header");
  }

  public render() {
    super.render();
    this.element.innerHTML = `
      <h1 class="main-title">My Series</h1>`;
  }
}

export default HeaderComponent;
