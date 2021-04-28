export class ServerMessage {
  private readonly color: string;
  private readonly content: string;

  constructor(content: string) {
    this.content = content;
    this.color = "red";
  }

  domElement() {
    const container = document.createElement("div");
    const text = document.createElement("span");

    container.className = "message-container";
    text.className = "message-content";

    text.innerText = this.content;
    text.style.color = this.color;

    container.appendChild(text);
    return container;
  }
}
