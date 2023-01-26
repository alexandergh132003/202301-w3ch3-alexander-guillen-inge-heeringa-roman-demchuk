import Component from "../Component/Component";

class RatingListComponent extends Component {
  constructor(parentElement: Element) {
    super(parentElement, "score", "ul");
  }

  public render() {
    super.render();

    this.element.innerHTML = `
      <li class="score__star">
        <button>
        <i class="icon icon--score far fa-star" title="1/5"></i>
        </button>
      </li>
    `.repeat(5);

    this.rate();
  }

  rate() {
    const buttons = this.element.querySelectorAll(".icon--score");

    const getButtonClickedIndex = (
      button: HTMLElement,
      index: number,
      buttonCollection: HTMLElement[]
    ) => {
      button.addEventListener("ick", () => {
        buttonCollection.slice(0, index).forEach((button) => {
          button.className = "icon-score fas fa-star";
        });
      });
    };

    [...buttons].forEach(getButtonClickedIndex);
  }
}

export default RatingListComponent;
