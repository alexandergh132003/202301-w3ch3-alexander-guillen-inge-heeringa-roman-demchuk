import { type SeriesStructure } from "../../types/types";
import Component from "../Component/Component";

class SeriesCardComponent extends Component {
  private readonly serie: SeriesStructure;

  constructor(parentElement: Element, serie: SeriesStructure) {
    super(parentElement, "serie", "li");
    this.serie = serie;
  }

  public render() {
    super.render();

    this.element.innerHTML = `
      <img class="serie__poster" src="${this.serie.poster}" alt="${this.serie.name} poster"/>
      <h4 class="serie__title">${this.serie.name}</h4>
      <span class="serie__info">${this.serie.creator} (${this.serie.year})</span>
      <ul class="score"></ul>
      <button><i class="icon icon--delete fas fa-times-circle"></i></button>
    `;
  }
}

export default SeriesCardComponent;
