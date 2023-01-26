import series from "../../series/series";
import { type Series } from "../../types/types";
import Component from "../Component/Component";
import ListComponent from "../ListComponent/ListComponent";

class ListContainerComponent extends Component {
  series: Series;

  constructor(parentElement: Element, series: Series) {
    super(parentElement, "main-content", "main");
    this.series = series;
  }

  public render() {
    super.render();
    const watchedSeries = series.filter((serie) => serie.isWatched);
    const pendingSeries = series.filter((serie) => !serie.isWatched);
    const listInfoPending = `You have ${pendingSeries.length} series pending to watch`;
    const listInfoWatched =
      watchedSeries.length === 5
        ? "Congrats! You've watched all your series"
        : "";

    const pendingSeriesListComponent = new ListComponent(
      this.element,
      "Pending series",
      listInfoPending,
      pendingSeries
    );
    const watchedSeriesListComponent = new ListComponent(
      this.element,
      "Watched series",
      listInfoWatched,
      watchedSeries
    );

    this.element.innerHTML = `
      <h2 class="main-content__title">Series list</h2>
      `;

    pendingSeriesListComponent.render();
    watchedSeriesListComponent.render();
  }
}

export default ListContainerComponent;
