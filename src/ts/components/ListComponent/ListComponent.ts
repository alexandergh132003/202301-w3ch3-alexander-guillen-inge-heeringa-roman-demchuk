import series from "../../series/series";
import { type SeriesStructure, type Series } from "../../types/types";
import Component from "../Component/Component";
import CardComponent from "../CardComponent/CardComponent";

class ListComponent extends Component {
  title: string;
  series: Series;

  constructor(parentElement: Element, title: string, series: Series) {
    super(parentElement, "list", "series");
    this.title = title;
    this.series = series;
  }

  render() {
    super.render();
    this.element.innerHTML = `<h3 class="list__title">${this.title}</h3>
        <span class="list__info">You have 4 series pending to watch</span>
        <!--<span class="list__info">Congrats! You've watched all your series</span>-->
        <ul class="series">
        
        </ul>`;

    this.series.forEach((serie) => {
      const seriesCard = new CardComponent(this.element, serie);
      seriesCard.render();
    });
  }
}
export default ListComponent;