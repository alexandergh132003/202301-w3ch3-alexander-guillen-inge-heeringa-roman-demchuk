import Component from "../Component/Component";

class SeriesListComponent extends Component {
  title: string;

  constructor(parentElement: Element, title: string) {
    super(parentElement, "list", "section");
    this.title = title;
  }

  render() {
    super.render();
    this.element.innerHTML = `<h3 class="list__title">${this.title}</h3>
        <span class="list__info">You have 4 series pending to watch</span>
        <!--<span class="list__info">Congrats! You've watched all your series</span>-->
        <ul class="series">
        </ul>`;
  }
}
export default SeriesListComponent;
