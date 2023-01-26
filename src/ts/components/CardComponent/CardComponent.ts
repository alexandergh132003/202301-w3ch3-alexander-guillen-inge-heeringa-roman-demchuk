import { type Series, type SeriesStructure } from "../../types/types";
import Component from "../Component/Component";

class CardComponent extends Component {
  series: SeriesStructure;

  constructor(parentElement: Element, series: SeriesStructure) {
    super(parentElement, "serie", "li");
    this.series = series;
  }

  public render() {
    super.render();

    this.element.innerHTML = `
      <img class="serie__poster" src="${this.series.poster}" alt="${this.series.name} poster"/>
      <h4 class="serie_s_title">${this.series.name}</h4>
      <span class="serie__info">${this.series.creator} (${this.series.year})</span>
      <ul class="score"></ul>
      <button><i class="icon icon--delete fas fa-times-circle"></i></button>
    `;
  }
}

export default CardComponent;
