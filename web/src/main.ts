import { ServerMessage } from "./messages/ServerMessage";
import { MessageInterface, UserMessage } from "./messages/UserMessage";

class GetMessageDto {
  messages: MessageInterface[];
  lastId: string;
}

class AddMessageDto {
  userName: string;
  color: string;
  content: string;
}

class Main {
  private textarea: HTMLTextAreaElement;
  private messageContainer: HTMLElement;
  private readonly COLORS: string[];
  // private readonly commands: Record<string, (T?: string) => void>;
  private readonly commands: any;

  constructor() {
    this.textarea = document.querySelector("textarea");
    this.messageContainer = document.querySelector("#message-container");
    this.COLORS = ["white", "blue", "red", "salmon", "green", "yellow"];
    this.commands = {
      "/color": this.changeColor,
      "/nick": this.changeNickname,
    };
    this.init();
  }

  init() {
    !sessionStorage.getItem("userName")
      ? sessionStorage.setItem("userName", prompt("Set your username"))
      : null;

    this.textarea.addEventListener("keypress", (e) => {
      if (e.code === "Enter") {
        this.handleMessageSend(e);
      }
    });

    this.fetchData();
  }

  changeColor() {
    const currColor = sessionStorage.getItem("color");
    let newColor = this.COLORS[Math.floor(Math.random() * this.COLORS.length)];
    if (currColor) {
      while (newColor === currColor) {
        newColor = this.COLORS[Math.floor(Math.random() * this.COLORS.length)];
      }
      sessionStorage.setItem("color", newColor);
    } else {
      sessionStorage.setItem("color", newColor);
    }
  }

  changeNickname(userName: string) {
    const prevUserName = sessionStorage.getItem("userName");
    sessionStorage.setItem("userName", userName);
    const message = new ServerMessage(
      `Changed your username from ${prevUserName}, to ${userName}`
    );
    console.log(this.COLORS, this.commands, this.messageContainer);
    this.messageContainer.appendChild(message.domElement());
    this.messageContainer.scrollTop = this.messageContainer.scrollHeight;
  }

  checkIfIsCommand(message: string) {
    const [firstWord, ...rest] = message.split(" ");
    if (firstWord === "/nick") {
      this.changeNickname(rest.join(""));
      return true;
    }
    if (firstWord === "/color") {
      this.changeColor();
      return true;
    }
  }

  async fetchData(): Promise<void> {
    const data: GetMessageDto = await (
      await fetch(
        `http://localhost:8080/message?lastMessageId=${sessionStorage.getItem(
          "lastId"
        )}`
      )
    ).json();
    data.messages.forEach((message) => {
      const userMessage = new UserMessage(message);
      this.messageContainer.appendChild(userMessage.domElement());
      this.messageContainer.scrollTop = this.messageContainer.scrollHeight;
    });
    sessionStorage.setItem("lastId", data.lastId);
    await this.fetchData();
  }

  handleMessageSend(e: Event) {
    e.preventDefault();
    if (this.checkIfIsCommand(this.textarea.value)) {
      this.textarea.value = "";
      return;
    }
    if (!sessionStorage.getItem("color")) {
      sessionStorage.setItem(
        "color",
        this.COLORS[Math.floor(Math.random() * this.COLORS.length)]
      );
    }
    const data: AddMessageDto = {
      content: encodeURIComponent(this.textarea.value),
      userName: encodeURIComponent(sessionStorage.getItem("userName")),
      color: sessionStorage.getItem("color"),
    };
    if (data.content.length === 0) return;
    this.textarea.value = "";
    fetch("http://localhost:8080/message", {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(data),
    });
  }
}

new Main();
