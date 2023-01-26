import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import ListContainerComponent from "./components/ListContainerComponent/ListContainerComponent";

const appContainer = document.querySelector(".container")!;

const headerComponent = new HeaderComponent(appContainer);
const seriesListContainerComponent = new ListContainerComponent(appContainer);

headerComponent.render();
seriesListContainerComponent.render();
