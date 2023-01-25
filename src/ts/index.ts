import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import MainComponent from "./components/MainComponent/MainComponent";

const appContainer = document.querySelector(".container")!;

const headerComponent = new HeaderComponent(appContainer);
const mainComponent = new MainComponent(appContainer);

headerComponent.render();
mainComponent.render();
