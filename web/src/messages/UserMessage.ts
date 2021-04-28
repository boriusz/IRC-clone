export interface MessageInterface {
  userName: string;
  content: string;
  color: string;
  time: Date;
}

export class UserMessage {
  private readonly content: string;
  private readonly userName: string;
  private readonly color: string;
  private readonly time: Date;

  constructor(message: MessageInterface) {
    this.userName = decodeURIComponent(message.userName);
    this.content = decodeURIComponent(message.content);
    this.color = message.color;
    this.time = message.time;
  }

  domElement() {
    const container = document.createElement("div");
    const name = document.createElement("span");
    const text = document.createElement("span");

    container.className = "message-container";
    name.className = "message-poster";
    text.className = "message-content";

    const messageTime = document.createElement("span");
    messageTime.innerText = `[${new Date(this.time).toLocaleTimeString()}] `;
    messageTime.style.color = "gray";
    const nickName = document.createElement("span");
    nickName.innerText = `<@${this.userName}> `;
    nickName.style.color = this.color;

    name.appendChild(messageTime);
    name.appendChild(nickName);

    text.innerText = this.content;

    container.appendChild(name);
    container.appendChild(text);
    return container;
  }
}
