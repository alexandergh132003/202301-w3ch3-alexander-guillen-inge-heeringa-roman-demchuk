interface ComponentStructure {
  element: Element;
}

class Component implements ComponentStructure {
  public element: Element;
  private readonly parentElement: Element;

  constructor(parentElement: Element, className: string, tagName: string) {
    this.element = document.createElement(tagName);
    this.element.className = className;
    this.parentElement = parentElement;
  }

  public render() {
    this.parentElement.appendChild(this.element);
  }
}

export default Component;
