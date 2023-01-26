import Component from "../Component/Component";
import SeriesListComponent from "../SeriesListComponent/SeriesListComponent";

class SeriesListContainerComponent extends Component {
  constructor(parentElement: Element) {
    super(parentElement, "main-content", "main");
  }

  public render() {
    super.render();
    const pendingSeriesListComponent = new SeriesListComponent(
      this.element,
      "Pending series"
    );
    const watchedSeriesListComponent = new SeriesListComponent(
      this.element,
      "Watched series"
    );

    this.element.innerHTML = `
      <h2 class="main-content__title">Series list</h2>
      `;

    pendingSeriesListComponent.render();
    watchedSeriesListComponent.render();
  }
}

export default SeriesListContainerComponent;
