import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import SeriesListContainerComponent from "./components/SeriesListContainerComponent/SeriesListContainerComponent";

const appContainer = document.querySelector(".container")!;

const headerComponent = new HeaderComponent(appContainer);
const seriesListContainerComponent = new SeriesListContainerComponent(
  appContainer
);

headerComponent.render();
seriesListContainerComponent.render();
