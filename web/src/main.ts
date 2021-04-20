const textarea = document.querySelector<HTMLTextAreaElement>("textarea");
const messageContainer = document.querySelector("#message-container");
let userName: string;

if (sessionStorage.getItem("userName")) {
  userName = sessionStorage.userName;
} else {
  userName = prompt("Podaj nick");
  sessionStorage.setItem("userName", userName);
}

class GetMessageDto {
  messages: MessageInterface[];
  lastId: string;
}

interface MessageInterface {
  userName: string;
  content: string;
  color: string;
  time: Date;
}

class addMessageDto {
  userName: string;
  color: string;
  content: string;
}

textarea.addEventListener("keypress", async (e) => {
  if (e.code === "Enter") {
    e.preventDefault();
    const data: addMessageDto = {
      content: textarea.value,
      userName,
      color: sessionStorage.getItem("color") ?? "blue",
    };
    if (data.content.length === 0) return;
    textarea.value = "";
    const response = await (
      await fetch("http://localhost:8080/message", {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: JSON.stringify(data),
      })
    ).json();
    if (response.errors) {
      console.log(response.errors);
    }
  }
});

const fetchData = async () => {
  const data: GetMessageDto = await (
    await fetch(
      `http://localhost:8080/message?lastMessageId=${sessionStorage.getItem(
        "lastId"
      )}`
    )
  ).json();
  console.log(data.messages.length);
  data.messages.forEach((message) => {
    const post = new Message(message);
    messageContainer.appendChild(post.domElement());
    messageContainer.scrollTop = messageContainer.scrollHeight;
  });
  sessionStorage.setItem("lastId", data.lastId);
  await fetchData();
};

fetchData();

class Message {
  private readonly content: string;
  private readonly userName: string;
  private readonly color: string;
  private readonly time: Date;
  constructor(message: MessageInterface) {
    this.userName = message.userName;
    this.content = message.content;
    this.color = message.color;
    this.time = message.time;
  }

  domElement() {
    const container = document.createElement("div");
    const name = document.createElement("span");
    const text = document.createElement("span");

    console.log(typeof this.time);
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
