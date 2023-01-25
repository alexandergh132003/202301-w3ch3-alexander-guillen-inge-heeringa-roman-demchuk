import Component from "../Component/Component";

class MainComponent extends Component {
  constructor(parentElement: Element) {
    super(parentElement, "main-content", "main");
  }

  public render() {
    super.render();
    this.element.innerHTML = `
      <h2 class="main-content__title">Series list</h2>`;
  }
}

export default MainComponent;
