import { ServerMessage } from "./messages/ServerMessage";
import { MessageInterface, UserMessage } from "./messages/UserMessage";
import Emotes from "./Emotes";

// import './libs/stylesheets/jquery.cssemoticons.css'
// const $ = require('raw-loader!./libs/javascripts/jquery-1.4.2.min').default
// const jqEmotes = require('raw-loader!./libs/javascripts/jquery.cssemoticons')
// console.log(jq, jqEmotes)

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
  private textArea: HTMLTextAreaElement;
  private readonly messageContainer: HTMLElement;
  private readonly COLORS: string[];
  private readonly commands: Record<string, (T?: string) => void>;
  private emoteManager: Emotes;
  quit: boolean;
  private $chatlist: any;

  constructor() {
    this.textArea = document.querySelector("textarea");
    this.messageContainer = document.querySelector(".overview");
    this.$chatlist = $('#chatlist');
    this.$chatlist.tinyscrollbar()

    this.COLORS = ["white", "blue", "red", "salmon", "green", "yellow"];
    this.commands = {
      "/color": this.changeColor,
      "/nick": this.changeNickname,
    };
    this.emoteManager = new Emotes();
    this.init();
  }

  init() {
    !sessionStorage.getItem("userName")
      ? sessionStorage.setItem("userName", prompt("Set your username"))
      : null;

    this.textArea.addEventListener("keypress", (e) => {
      if (e.code === "Enter") this.handleMessageSend(e);
      // } else {
      //   const elapsedLength = this.textArea.value.length + 1;
      //   const wordCount = this.textArea.value.split(/\s+/).length;
      //   if (elapsedLength > 100 || wordCount > 25) e.preventDefault();
      // }
    });

    // this.textArea.addEventListener("paste", (e) => {
    //   const prevValue = this.textArea.value;
    //   const pasteValue = e.clipboardData.getData("text");
    //   const selectedValue = window.getSelection().toString();
    //   const elapsedWordCount =
    //     prevValue.split(/\s+/).length -
    //     selectedValue.split(/\s+/).length +
    //     pasteValue.split(/\s+/).length;
    //   const elapsedLength =
    //     prevValue.length - selectedValue.length + pasteValue.length;
    //   if (elapsedLength < 100 || elapsedWordCount < 25) e.preventDefault();
    // });
    this.fetchData();
  }

  changeColor() {
    const currColor = sessionStorage.getItem("color");
    let newColor = this.COLORS[Math.floor(Math.random() * this.COLORS.length)];
    if (currColor) {
      while (newColor === currColor)
        newColor = this.COLORS[Math.floor(Math.random() * this.COLORS.length)];

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
    if (firstWord === '/quit') {
      this.quit = true
      alert('opuszczono, nie otrzymasz nowych wiadomości')
      return true
    }
    return false;
  }

  async fetchData(): Promise<void> {
    if (!this.quit) {
      const data: GetMessageDto = await (
        await fetch(
          `http://localhost:8080/message?lastMessageId=${sessionStorage.getItem(
            "lastId"
          )}`
        )
      ).json();
      data.messages.forEach((message) => {
        const userMessage = new UserMessage(message, this.emoteManager);
        this.messageContainer.appendChild(userMessage.domElement());
        (window as any).emoticons();
        const sb = this.$chatlist.data('plugin_tinyscrollbar')
        sb.update('bottom')
        // this.messageContainer.scrollTop = this.messageContainer.scrollHeight;
      });
      sessionStorage.setItem("lastId", data.lastId);
      await this.fetchData();
    }
    }

  // eslint-disable-next-line complexity
  handleMessageSend(e: Event) {
    e.preventDefault();
    const value = this.textArea.value;
    if (!value || value.trim().length === 0) {
      this.textArea.value = "";
      return;
    }
    if (this.checkIfIsCommand(this.textArea.value)) {
      this.textArea.value = "";
      return;
    }
    if (!sessionStorage.getItem("color")) {
      sessionStorage.setItem(
        "color",
        this.COLORS[Math.floor(Math.random() * this.COLORS.length)]
      );
    }
    const data: AddMessageDto = {
      content: encodeURIComponent(value.trim()),
      userName: encodeURIComponent(sessionStorage.getItem("userName")),
      color: sessionStorage.getItem("color"),
    };
    this.textArea.value = "";
    fetch("http://localhost:8080/message", {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(data),
    });
  }
}

new Main();
