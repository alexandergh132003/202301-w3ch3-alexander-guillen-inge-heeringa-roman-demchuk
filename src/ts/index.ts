import RatingListComponent from "./components/RatingButtonComponent/RatingButtonComponent";

/* Mport HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import SeriesListContainerComponent from "./components/SeriesListContainerComponent/SeriesListContainerComponent";
*/
const appContainer = document.querySelector(".container")!;

/*
Const headerComponent = new HeaderComponent(appContainer);
const seriesListContainerComponent = new SeriesListContainerComponent(
  appContainer
);

headerComponent.render();
seriesListContainerComponent.render();
*/

const buttons = new RatingListComponent(appContainer);

buttons.render();
