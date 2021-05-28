import Emotes from "../Emotes";

export interface MessageInterface {
  userName: string;
  content: string;
  color: string;
  createdAt: Date;
}

export class UserMessage {
  private readonly content: string;
  private readonly userName: string;
  private readonly color: string;
  private readonly time: Date;
  private emoteManager: Emotes;

  constructor(message: MessageInterface, emoteManager: Emotes) {
    this.userName = decodeURIComponent(message.userName);
    this.content = decodeURIComponent(message.content);
    this.color = message.color;
    this.time = message.createdAt;
    this.emoteManager = emoteManager;
  }

  domElement() {
    const container = document.createElement("div");
    const name = document.createElement("span");
    const text = document.createElement("div");

    //
    text.style.display = 'inline'
    //

    container.className = "message-wrapper";
    name.className = "message-poster";
    text.className = "message-content-w";

    const messageTime = document.createElement("span");
    messageTime.innerText = `[${new Date(this.time).toLocaleTimeString()}] `;
    messageTime.style.color = "gray";
    const nickName = document.createElement("span");
    nickName.innerText = `<@${this.userName}> `;
    nickName.style.color = this.color;

    name.appendChild(messageTime);
    name.appendChild(nickName);

    text.appendChild(this.emoteManager.emoticonize(this.content));

    container.appendChild(name);
    container.appendChild(text);
    return container;
  }
}
