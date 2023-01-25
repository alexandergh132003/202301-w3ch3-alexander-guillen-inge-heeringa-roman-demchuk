import Component from "../Component/Component";

class SectionComponent extends Component {
  constructor(parentElement: Element) {
    super(parentElement, "list", "section");
  }

  render() {
    super.render();
    this.element.innerHTML = `<h3 class="list__title">Pending series</h3>
        <span class="list__info">You have 4 series pending to watch</span>
        <!--<span class="list__info">Congrats! You've watched all your series</span>-->
        <ul class="series"></ul>`;
  }
}
export default SectionComponent;
