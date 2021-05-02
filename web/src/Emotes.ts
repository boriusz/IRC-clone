export default class Emotes {
  private emoteButton: HTMLElement;
  private textInput: HTMLElement;
  private textArea: HTMLTextAreaElement;
  private emoteContainer: HTMLElement;

  constructor() {
    this.emoteButton = document.querySelector("#emote-button");
    this.textInput = document.querySelector("#text-input");
    this.textArea = document.querySelector("textarea");
    this.createModal();
    this.emoteContainer = document.querySelector(".emote-list");
    this.emoteButton.addEventListener("click", () => {
      this.showModal();
    });
    document.addEventListener(
      "click",
      (e) => {
        const target = e.target as HTMLElement;
        if (
          target.parentElement.parentElement !== this.emoteContainer &&
          target.parentElement !== this.emoteContainer &&
          target !== this.emoteContainer
        )
          this.hideModal();
      },
      true
    );
  }

  private readonly emoteList: Record<string, string> = {
    EZ: "https://cdn.betterttv.net/emote/5590b223b344e2c42a9e28e3/1x",
    TriDance: "https://cdn.betterttv.net/emote/5d1e70f498539c4801cc3811/1x",
    BoneZone: "https://cdn.betterttv.net/emote/5b6c5efadd8fb0185163bd4f/1x",
    CrabPls: "https://cdn.betterttv.net/emote/5c2a4ddda402f16774559abe/1x",
    dogJAM: "https://cdn.betterttv.net/emote/5f2e2fcf6f378244660275ae/1x",
    AlienPls: "https://cdn.betterttv.net/emote/603409747c74605395f32662/1x",
    PugPls: "https://cdn.betterttv.net/emote/60273dc69700e5276604861f/1x",
    Smoge: "https://cdn.betterttv.net/emote/5fef2f76be65982e48ceefe5/1x",
    pepeBASS: "https://cdn.betterttv.net/emote/5c393177fb40bc09d7c6c3aa/1x",
    doggoArrive: "https://cdn.betterttv.net/emote/5f21a9a2cf6d2144653d87e4/1x",
    YesYes: "https://cdn.betterttv.net/emote/608c226c39b5010444d09256/1x",
    MusicMakeYouLoseControl:
      "https://cdn.betterttv.net/emote/5e77ed63d112fc372574e07e/1x",
    Dance: "https://cdn.betterttv.net/emote/5ffccc42465444316bf5ff55/1x",
    catJAM: "https://cdn.betterttv.net/emote/5f1b0186cf6d2144653d2970/1x",
    ":)": "https://cdn.betterttv.net/emote/5fa5fef7f447d2645c1f737e/1x",
    ":(": "https://cdn.betterttv.net/emote/5d73a5a95de8cf715f58806a/1x",
    PointsPLS: "https://cdn.betterttv.net/emote/5fed2d8fbe65982e48cecf62/1x",
    PogU: "https://cdn.betterttv.net/emote/5e4e7a1f08b4447d56a92967/1x",
    weirdChamp: "https://cdn.betterttv.net/emote/5d20a55de1cfde376e532972/1x",
    WeSmart: "https://cdn.betterttv.net/emote/5a311dd16405a95e4b0d4967/1x",
    OOOO: "https://cdn.betterttv.net/emote/5e5300e6751afe7d553e4351/1x",
  };

  emoticonize(input: string): HTMLElement {
    const splatted = input.split(" ");
    const container = document.createElement("span");
    splatted.forEach((word) => {
      if (word in this.emoteList) {
        const imageElement = document.createElement("img");
        imageElement.src = this.emoteList[word];
        imageElement.alt = word;
        imageElement.className = "emote";
        container.appendChild(imageElement);
      } else {
        const spanElement = document.createTextNode(word);
        container.appendChild(spanElement);
      }
    });
    return container;
  }

  createModal() {
    if (document.querySelector(".emote-list")) {
      this.hideModal();
      return;
    }
    const container = document.createElement("div");
    container.className = "emote-list";
    // container.style.left =
    //   this.textInput.offsetLeft + this.textInput.offsetWidth + "px";
    Object.keys(this.emoteList).forEach((emoteName) => {
      const wrapper = document.createElement("div");
      const image = document.createElement("img");
      image.src = this.emoteList[emoteName];
      image.setAttribute("emoteName", emoteName);
      wrapper.appendChild(image);
      wrapper.addEventListener("click", (e) => {
        this.textArea.value += ` ${emoteName} `;
      });
      container.appendChild(wrapper);
    });
    this.textInput.prepend(container);
    this.emoteContainer = container;
  }

  hideModal() {
    this.emoteContainer.style.visibility = "hidden";
  }

  showModal() {
    this.emoteContainer.style.visibility = "visible";
  }
}
