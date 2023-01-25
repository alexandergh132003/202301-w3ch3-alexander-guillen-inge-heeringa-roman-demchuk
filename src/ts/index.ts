import HeaderComponent from "./components/HeaderComponent/HeaderComponent";
import MainComponent from "./components/MainComponent/MainComponent";
import SectionComponent from "./components/SectionComponent/SectionComponent";

const appContainer = document.querySelector(".container")!;

const headerComponent = new HeaderComponent(appContainer);
const mainComponent = new MainComponent(appContainer);

headerComponent.render();
mainComponent.render();

const sectionComponent = new SectionComponent(mainComponent.element);

sectionComponent.render();
