import { type Series } from "../../types/types";
import Component from "../Component/Component";
import CardComponent from "../CardComponent/CardComponent";

class ListComponent extends Component {
  title: string;
  series: Series;
  listInfo: string;

  constructor(
    parentElement: Element,
    title: string,
    listInfo: string,
    series: Series
  ) {
    super(parentElement, "list", "series");
    this.title = title;
    this.listInfo = listInfo;
    this.series = series;
  }

  render() {
    super.render();
    this.element.innerHTML = `<h3 class="list__title">${this.title}</h3>
        <span class="list__info">${this.listInfo}</span>
        <!--<span class="list__info">Congrats! You've watched all your series</span>-->
        <ul class="series"></ul>`;

    this.series.forEach((serie) => {
      const seriesCard = new CardComponent(
        this.element.querySelector(".series")!,
        serie
      );
      seriesCard.render();
    });
  }
}
export default ListComponent;
