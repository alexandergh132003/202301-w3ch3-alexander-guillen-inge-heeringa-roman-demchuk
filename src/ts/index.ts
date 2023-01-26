import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import ListContainerComponent from "./components/ListContainerComponent/ListContainerComponent";
import series from "./series/series";

const appContainer = document.querySelector(".container")!;

const headerComponent = new HeaderComponent(appContainer);
const seriesListContainerComponent = new ListContainerComponent(
  appContainer,
  series
);

headerComponent.render();
seriesListContainerComponent.render();
