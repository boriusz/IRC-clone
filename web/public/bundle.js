/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Emotes.ts":
/*!***********************!*\
  !*** ./src/Emotes.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Emotes = /** @class */ (function () {
    function Emotes() {
        var _this = this;
        this.emoteList = {
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
            MusicMakeYouLoseControl: "https://cdn.betterttv.net/emote/5e77ed63d112fc372574e07e/1x",
            Dance: "https://cdn.betterttv.net/emote/5ffccc42465444316bf5ff55/1x",
            catJAM: "https://cdn.betterttv.net/emote/5f1b0186cf6d2144653d2970/1x",
            PointsPLS: "https://cdn.betterttv.net/emote/5fed2d8fbe65982e48cecf62/1x",
            PogU: "https://cdn.betterttv.net/emote/5e4e7a1f08b4447d56a92967/1x",
            weirdChamp: "https://cdn.betterttv.net/emote/5d20a55de1cfde376e532972/1x",
            WeSmart: "https://cdn.betterttv.net/emote/5a311dd16405a95e4b0d4967/1x",
            OOOO: "https://cdn.betterttv.net/emote/5e5300e6751afe7d553e4351/1x",
        };
        this.emoteButton = document.querySelector("#emote-button");
        this.textInput = document.querySelector("#text-input");
        this.textArea = document.querySelector("textarea");
        this.createModal();
        this.emoteContainer = document.querySelector(".emote-list");
        this.emoteButton.addEventListener("click", function () {
            _this.showModal();
        });
        document.addEventListener("click", function (e) {
            var target = e.target;
            if (target.parentElement.parentElement !== _this.emoteContainer &&
                target.parentElement !== _this.emoteContainer &&
                target !== _this.emoteContainer)
                _this.hideModal();
        }, true);
    }
    Emotes.prototype.emoticonize = function (input) {
        var _this = this;
        var splatted = input.split(" ");
        var container = document.createElement("span");
        container.className = 'message-content';
        splatted.forEach(function (word) {
            if (word in _this.emoteList) {
                var imageElement = document.createElement("img");
                imageElement.src = _this.emoteList[word];
                imageElement.alt = " " + word;
                imageElement.className = "emote text";
                imageElement.setAttribute("title", word);
                container.appendChild(imageElement);
                container.appendChild(document.createTextNode(' '));
            }
            else {
                var spanElement = document.createTextNode(word + ' ');
                container.appendChild(spanElement);
            }
        });
        return container;
    };
    Emotes.prototype.createModal = function () {
        var _this = this;
        if (document.querySelector(".emote-list")) {
            this.hideModal();
            return;
        }
        var container = document.createElement("div");
        container.className = "emote-list";
        Object.keys(this.emoteList).forEach(function (emoteName) {
            var wrapper = document.createElement("div");
            var image = document.createElement("img");
            image.src = _this.emoteList[emoteName];
            image.setAttribute("emoteName", emoteName);
            wrapper.setAttribute("title", emoteName);
            wrapper.appendChild(image);
            wrapper.addEventListener("click", function () {
                var elapsedLength = _this.textArea.value.length + emoteName.length;
                var wordCount = _this.textArea.value.split(/\s+/).length;
                if (elapsedLength < 100 || wordCount < 25)
                    _this.textArea.value += " " + emoteName + " ";
            });
            container.appendChild(wrapper);
        });
        this.textInput.prepend(container);
        this.emoteContainer = container;
    };
    Emotes.prototype.hideModal = function () {
        this.emoteContainer.style.visibility = "hidden";
    };
    Emotes.prototype.showModal = function () {
        this.emoteContainer.style.visibility = "visible";
    };
    return Emotes;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Emotes);


/***/ }),

/***/ "./src/messages/ServerMessage.ts":
/*!***************************************!*\
  !*** ./src/messages/ServerMessage.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ServerMessage": () => (/* binding */ ServerMessage)
/* harmony export */ });
var ServerMessage = /** @class */ (function () {
    function ServerMessage(content) {
        this.content = content;
        this.color = "red";
    }
    ServerMessage.prototype.domElement = function () {
        var container = document.createElement("div");
        var text = document.createElement("span");
        container.className = "message-container";
        text.className = "message-content";
        text.innerText = this.content;
        text.style.color = this.color;
        container.appendChild(text);
        return container;
    };
    return ServerMessage;
}());



/***/ }),

/***/ "./src/messages/UserMessage.ts":
/*!*************************************!*\
  !*** ./src/messages/UserMessage.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserMessage": () => (/* binding */ UserMessage)
/* harmony export */ });
var UserMessage = /** @class */ (function () {
    function UserMessage(message, emoteManager) {
        this.userName = decodeURIComponent(message.userName);
        this.content = decodeURIComponent(message.content);
        this.color = message.color;
        this.time = message.createdAt;
        this.emoteManager = emoteManager;
    }
    UserMessage.prototype.domElement = function () {
        var container = document.createElement("div");
        var name = document.createElement("span");
        var text = document.createElement("div");
        //
        text.style.display = 'inline';
        //
        container.className = "message-wrapper";
        name.className = "message-poster";
        text.className = "message-content-w";
        var messageTime = document.createElement("span");
        messageTime.innerText = "[" + new Date(this.time).toLocaleTimeString() + "] ";
        messageTime.style.color = "gray";
        var nickName = document.createElement("span");
        nickName.innerText = "<@" + this.userName + "> ";
        nickName.style.color = this.color;
        name.appendChild(messageTime);
        name.appendChild(nickName);
        text.appendChild(this.emoteManager.emoticonize(this.content));
        container.appendChild(name);
        container.appendChild(text);
        return container;
    };
    return UserMessage;
}());



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _messages_ServerMessage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./messages/ServerMessage */ "./src/messages/ServerMessage.ts");
/* harmony import */ var _messages_UserMessage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./messages/UserMessage */ "./src/messages/UserMessage.ts");
/* harmony import */ var _Emotes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Emotes */ "./src/Emotes.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



// import './libs/stylesheets/jquery.cssemoticons.css'
// const $ = require('raw-loader!./libs/javascripts/jquery-1.4.2.min').default
// const jqEmotes = require('raw-loader!./libs/javascripts/jquery.cssemoticons')
// console.log(jq, jqEmotes)
var GetMessageDto = /** @class */ (function () {
    function GetMessageDto() {
    }
    return GetMessageDto;
}());
var AddMessageDto = /** @class */ (function () {
    function AddMessageDto() {
    }
    return AddMessageDto;
}());
var Main = /** @class */ (function () {
    function Main() {
        this.textArea = document.querySelector("textarea");
        this.messageContainer = document.querySelector(".overview");
        window.tinyscrollbar();
        this.COLORS = ["white", "blue", "red", "salmon", "green", "yellow"];
        this.commands = {
            "/color": this.changeColor,
            "/nick": this.changeNickname,
        };
        this.emoteManager = new _Emotes__WEBPACK_IMPORTED_MODULE_2__.default();
        this.init();
    }
    Main.prototype.init = function () {
        var _this = this;
        !sessionStorage.getItem("userName")
            ? sessionStorage.setItem("userName", prompt("Set your username"))
            : null;
        this.textArea.addEventListener("keypress", function (e) {
            if (e.code === "Enter")
                _this.handleMessageSend(e);
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
    };
    Main.prototype.changeColor = function () {
        var currColor = sessionStorage.getItem("color");
        var newColor = this.COLORS[Math.floor(Math.random() * this.COLORS.length)];
        if (currColor) {
            while (newColor === currColor)
                newColor = this.COLORS[Math.floor(Math.random() * this.COLORS.length)];
            sessionStorage.setItem("color", newColor);
        }
        else {
            sessionStorage.setItem("color", newColor);
        }
    };
    Main.prototype.changeNickname = function (userName) {
        var prevUserName = sessionStorage.getItem("userName");
        sessionStorage.setItem("userName", userName);
        var message = new _messages_ServerMessage__WEBPACK_IMPORTED_MODULE_0__.ServerMessage("Changed your username from " + prevUserName + ", to " + userName);
        console.log(this.COLORS, this.commands, this.messageContainer);
        this.messageContainer.appendChild(message.domElement());
        this.messageContainer.scrollTop = this.messageContainer.scrollHeight;
    };
    Main.prototype.checkIfIsCommand = function (message) {
        var _a = message.split(" "), firstWord = _a[0], rest = _a.slice(1);
        if (firstWord === "/nick") {
            this.changeNickname(rest.join(""));
            return true;
        }
        if (firstWord === "/color") {
            this.changeColor();
            return true;
        }
        if (firstWord === '/quit') {
            this.quit = true;
            alert('opuszczono, nie otrzymasz nowych wiadomości');
            return true;
        }
        return false;
    };
    Main.prototype.fetchData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var data;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.quit) return [3 /*break*/, 4];
                        return [4 /*yield*/, fetch("http://localhost:8080/message?lastMessageId=" + sessionStorage.getItem("lastId"))];
                    case 1: return [4 /*yield*/, (_a.sent()).json()];
                    case 2:
                        data = _a.sent();
                        data.messages.forEach(function (message) {
                            var userMessage = new _messages_UserMessage__WEBPACK_IMPORTED_MODULE_1__.UserMessage(message, _this.emoteManager);
                            _this.messageContainer.appendChild(userMessage.domElement());
                            window.emoticons();
                            _this.messageContainer.scrollTop = _this.messageContainer.scrollHeight;
                        });
                        sessionStorage.setItem("lastId", data.lastId);
                        return [4 /*yield*/, this.fetchData()];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    // eslint-disable-next-line complexity
    Main.prototype.handleMessageSend = function (e) {
        e.preventDefault();
        var value = this.textArea.value;
        if (!value || value.trim().length === 0) {
            this.textArea.value = "";
            return;
        }
        if (this.checkIfIsCommand(this.textArea.value)) {
            this.textArea.value = "";
            return;
        }
        if (!sessionStorage.getItem("color")) {
            sessionStorage.setItem("color", this.COLORS[Math.floor(Math.random() * this.COLORS.length)]);
        }
        var data = {
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
    };
    return Main;
}());
new Main();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWIvLi9zcmMvRW1vdGVzLnRzIiwid2VicGFjazovL3dlYi8uL3NyYy9tZXNzYWdlcy9TZXJ2ZXJNZXNzYWdlLnRzIiwid2VicGFjazovL3dlYi8uL3NyYy9tZXNzYWdlcy9Vc2VyTWVzc2FnZS50cyIsIndlYnBhY2s6Ly93ZWIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2ViL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWIvLi9zcmMvbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELDhEQUFXO0FBQzdEO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixxQ0FBcUM7QUFDM0Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsQ0FBQztBQUNEIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBFbW90ZXMgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBFbW90ZXMoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLmVtb3RlTGlzdCA9IHtcclxuICAgICAgICAgICAgRVo6IFwiaHR0cHM6Ly9jZG4uYmV0dGVydHR2Lm5ldC9lbW90ZS81NTkwYjIyM2IzNDRlMmM0MmE5ZTI4ZTMvMXhcIixcclxuICAgICAgICAgICAgVHJpRGFuY2U6IFwiaHR0cHM6Ly9jZG4uYmV0dGVydHR2Lm5ldC9lbW90ZS81ZDFlNzBmNDk4NTM5YzQ4MDFjYzM4MTEvMXhcIixcclxuICAgICAgICAgICAgQm9uZVpvbmU6IFwiaHR0cHM6Ly9jZG4uYmV0dGVydHR2Lm5ldC9lbW90ZS81YjZjNWVmYWRkOGZiMDE4NTE2M2JkNGYvMXhcIixcclxuICAgICAgICAgICAgQ3JhYlBsczogXCJodHRwczovL2Nkbi5iZXR0ZXJ0dHYubmV0L2Vtb3RlLzVjMmE0ZGRkYTQwMmYxNjc3NDU1OWFiZS8xeFwiLFxyXG4gICAgICAgICAgICBkb2dKQU06IFwiaHR0cHM6Ly9jZG4uYmV0dGVydHR2Lm5ldC9lbW90ZS81ZjJlMmZjZjZmMzc4MjQ0NjYwMjc1YWUvMXhcIixcclxuICAgICAgICAgICAgQWxpZW5QbHM6IFwiaHR0cHM6Ly9jZG4uYmV0dGVydHR2Lm5ldC9lbW90ZS82MDM0MDk3NDdjNzQ2MDUzOTVmMzI2NjIvMXhcIixcclxuICAgICAgICAgICAgUHVnUGxzOiBcImh0dHBzOi8vY2RuLmJldHRlcnR0di5uZXQvZW1vdGUvNjAyNzNkYzY5NzAwZTUyNzY2MDQ4NjFmLzF4XCIsXHJcbiAgICAgICAgICAgIFNtb2dlOiBcImh0dHBzOi8vY2RuLmJldHRlcnR0di5uZXQvZW1vdGUvNWZlZjJmNzZiZTY1OTgyZTQ4Y2VlZmU1LzF4XCIsXHJcbiAgICAgICAgICAgIHBlcGVCQVNTOiBcImh0dHBzOi8vY2RuLmJldHRlcnR0di5uZXQvZW1vdGUvNWMzOTMxNzdmYjQwYmMwOWQ3YzZjM2FhLzF4XCIsXHJcbiAgICAgICAgICAgIGRvZ2dvQXJyaXZlOiBcImh0dHBzOi8vY2RuLmJldHRlcnR0di5uZXQvZW1vdGUvNWYyMWE5YTJjZjZkMjE0NDY1M2Q4N2U0LzF4XCIsXHJcbiAgICAgICAgICAgIFllc1llczogXCJodHRwczovL2Nkbi5iZXR0ZXJ0dHYubmV0L2Vtb3RlLzYwOGMyMjZjMzliNTAxMDQ0NGQwOTI1Ni8xeFwiLFxyXG4gICAgICAgICAgICBNdXNpY01ha2VZb3VMb3NlQ29udHJvbDogXCJodHRwczovL2Nkbi5iZXR0ZXJ0dHYubmV0L2Vtb3RlLzVlNzdlZDYzZDExMmZjMzcyNTc0ZTA3ZS8xeFwiLFxyXG4gICAgICAgICAgICBEYW5jZTogXCJodHRwczovL2Nkbi5iZXR0ZXJ0dHYubmV0L2Vtb3RlLzVmZmNjYzQyNDY1NDQ0MzE2YmY1ZmY1NS8xeFwiLFxyXG4gICAgICAgICAgICBjYXRKQU06IFwiaHR0cHM6Ly9jZG4uYmV0dGVydHR2Lm5ldC9lbW90ZS81ZjFiMDE4NmNmNmQyMTQ0NjUzZDI5NzAvMXhcIixcclxuICAgICAgICAgICAgUG9pbnRzUExTOiBcImh0dHBzOi8vY2RuLmJldHRlcnR0di5uZXQvZW1vdGUvNWZlZDJkOGZiZTY1OTgyZTQ4Y2VjZjYyLzF4XCIsXHJcbiAgICAgICAgICAgIFBvZ1U6IFwiaHR0cHM6Ly9jZG4uYmV0dGVydHR2Lm5ldC9lbW90ZS81ZTRlN2ExZjA4YjQ0NDdkNTZhOTI5NjcvMXhcIixcclxuICAgICAgICAgICAgd2VpcmRDaGFtcDogXCJodHRwczovL2Nkbi5iZXR0ZXJ0dHYubmV0L2Vtb3RlLzVkMjBhNTVkZTFjZmRlMzc2ZTUzMjk3Mi8xeFwiLFxyXG4gICAgICAgICAgICBXZVNtYXJ0OiBcImh0dHBzOi8vY2RuLmJldHRlcnR0di5uZXQvZW1vdGUvNWEzMTFkZDE2NDA1YTk1ZTRiMGQ0OTY3LzF4XCIsXHJcbiAgICAgICAgICAgIE9PT086IFwiaHR0cHM6Ly9jZG4uYmV0dGVydHR2Lm5ldC9lbW90ZS81ZTUzMDBlNjc1MWFmZTdkNTUzZTQzNTEvMXhcIixcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuZW1vdGVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Vtb3RlLWJ1dHRvblwiKTtcclxuICAgICAgICB0aGlzLnRleHRJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGV4dC1pbnB1dFwiKTtcclxuICAgICAgICB0aGlzLnRleHRBcmVhID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInRleHRhcmVhXCIpO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlTW9kYWwoKTtcclxuICAgICAgICB0aGlzLmVtb3RlQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lbW90ZS1saXN0XCIpO1xyXG4gICAgICAgIHRoaXMuZW1vdGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgX3RoaXMuc2hvd01vZGFsKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHZhciB0YXJnZXQgPSBlLnRhcmdldDtcclxuICAgICAgICAgICAgaWYgKHRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQgIT09IF90aGlzLmVtb3RlQ29udGFpbmVyICYmXHJcbiAgICAgICAgICAgICAgICB0YXJnZXQucGFyZW50RWxlbWVudCAhPT0gX3RoaXMuZW1vdGVDb250YWluZXIgJiZcclxuICAgICAgICAgICAgICAgIHRhcmdldCAhPT0gX3RoaXMuZW1vdGVDb250YWluZXIpXHJcbiAgICAgICAgICAgICAgICBfdGhpcy5oaWRlTW9kYWwoKTtcclxuICAgICAgICB9LCB0cnVlKTtcclxuICAgIH1cclxuICAgIEVtb3Rlcy5wcm90b3R5cGUuZW1vdGljb25pemUgPSBmdW5jdGlvbiAoaW5wdXQpIHtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHZhciBzcGxhdHRlZCA9IGlucHV0LnNwbGl0KFwiIFwiKTtcclxuICAgICAgICB2YXIgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTmFtZSA9ICdtZXNzYWdlLWNvbnRlbnQnO1xyXG4gICAgICAgIHNwbGF0dGVkLmZvckVhY2goZnVuY3Rpb24gKHdvcmQpIHtcclxuICAgICAgICAgICAgaWYgKHdvcmQgaW4gX3RoaXMuZW1vdGVMaXN0KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaW1hZ2VFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgICAgICAgICAgICAgIGltYWdlRWxlbWVudC5zcmMgPSBfdGhpcy5lbW90ZUxpc3Rbd29yZF07XHJcbiAgICAgICAgICAgICAgICBpbWFnZUVsZW1lbnQuYWx0ID0gXCIgXCIgKyB3b3JkO1xyXG4gICAgICAgICAgICAgICAgaW1hZ2VFbGVtZW50LmNsYXNzTmFtZSA9IFwiZW1vdGUgdGV4dFwiO1xyXG4gICAgICAgICAgICAgICAgaW1hZ2VFbGVtZW50LnNldEF0dHJpYnV0ZShcInRpdGxlXCIsIHdvcmQpO1xyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGltYWdlRWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJyAnKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc3BhbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh3b3JkICsgJyAnKTtcclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzcGFuRWxlbWVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gY29udGFpbmVyO1xyXG4gICAgfTtcclxuICAgIEVtb3Rlcy5wcm90b3R5cGUuY3JlYXRlTW9kYWwgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lbW90ZS1saXN0XCIpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGlkZU1vZGFsKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgY29udGFpbmVyLmNsYXNzTmFtZSA9IFwiZW1vdGUtbGlzdFwiO1xyXG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMuZW1vdGVMaXN0KS5mb3JFYWNoKGZ1bmN0aW9uIChlbW90ZU5hbWUpIHtcclxuICAgICAgICAgICAgdmFyIHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICB2YXIgaW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgICAgICAgICBpbWFnZS5zcmMgPSBfdGhpcy5lbW90ZUxpc3RbZW1vdGVOYW1lXTtcclxuICAgICAgICAgICAgaW1hZ2Uuc2V0QXR0cmlidXRlKFwiZW1vdGVOYW1lXCIsIGVtb3RlTmFtZSk7XHJcbiAgICAgICAgICAgIHdyYXBwZXIuc2V0QXR0cmlidXRlKFwidGl0bGVcIiwgZW1vdGVOYW1lKTtcclxuICAgICAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChpbWFnZSk7XHJcbiAgICAgICAgICAgIHdyYXBwZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBlbGFwc2VkTGVuZ3RoID0gX3RoaXMudGV4dEFyZWEudmFsdWUubGVuZ3RoICsgZW1vdGVOYW1lLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgIHZhciB3b3JkQ291bnQgPSBfdGhpcy50ZXh0QXJlYS52YWx1ZS5zcGxpdCgvXFxzKy8pLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgIGlmIChlbGFwc2VkTGVuZ3RoIDwgMTAwIHx8IHdvcmRDb3VudCA8IDI1KVxyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnRleHRBcmVhLnZhbHVlICs9IFwiIFwiICsgZW1vdGVOYW1lICsgXCIgXCI7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQod3JhcHBlcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy50ZXh0SW5wdXQucHJlcGVuZChjb250YWluZXIpO1xyXG4gICAgICAgIHRoaXMuZW1vdGVDb250YWluZXIgPSBjb250YWluZXI7XHJcbiAgICB9O1xyXG4gICAgRW1vdGVzLnByb3RvdHlwZS5oaWRlTW9kYWwgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5lbW90ZUNvbnRhaW5lci5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcclxuICAgIH07XHJcbiAgICBFbW90ZXMucHJvdG90eXBlLnNob3dNb2RhbCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGlzLmVtb3RlQ29udGFpbmVyLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcclxuICAgIH07XHJcbiAgICByZXR1cm4gRW1vdGVzO1xyXG59KCkpO1xyXG5leHBvcnQgZGVmYXVsdCBFbW90ZXM7XHJcbiIsInZhciBTZXJ2ZXJNZXNzYWdlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gU2VydmVyTWVzc2FnZShjb250ZW50KSB7XHJcbiAgICAgICAgdGhpcy5jb250ZW50ID0gY29udGVudDtcclxuICAgICAgICB0aGlzLmNvbG9yID0gXCJyZWRcIjtcclxuICAgIH1cclxuICAgIFNlcnZlck1lc3NhZ2UucHJvdG90eXBlLmRvbUVsZW1lbnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgdmFyIHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgICBjb250YWluZXIuY2xhc3NOYW1lID0gXCJtZXNzYWdlLWNvbnRhaW5lclwiO1xyXG4gICAgICAgIHRleHQuY2xhc3NOYW1lID0gXCJtZXNzYWdlLWNvbnRlbnRcIjtcclxuICAgICAgICB0ZXh0LmlubmVyVGV4dCA9IHRoaXMuY29udGVudDtcclxuICAgICAgICB0ZXh0LnN0eWxlLmNvbG9yID0gdGhpcy5jb2xvcjtcclxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGV4dCk7XHJcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcclxuICAgIH07XHJcbiAgICByZXR1cm4gU2VydmVyTWVzc2FnZTtcclxufSgpKTtcclxuZXhwb3J0IHsgU2VydmVyTWVzc2FnZSB9O1xyXG4iLCJ2YXIgVXNlck1lc3NhZ2UgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBVc2VyTWVzc2FnZShtZXNzYWdlLCBlbW90ZU1hbmFnZXIpIHtcclxuICAgICAgICB0aGlzLnVzZXJOYW1lID0gZGVjb2RlVVJJQ29tcG9uZW50KG1lc3NhZ2UudXNlck5hbWUpO1xyXG4gICAgICAgIHRoaXMuY29udGVudCA9IGRlY29kZVVSSUNvbXBvbmVudChtZXNzYWdlLmNvbnRlbnQpO1xyXG4gICAgICAgIHRoaXMuY29sb3IgPSBtZXNzYWdlLmNvbG9yO1xyXG4gICAgICAgIHRoaXMudGltZSA9IG1lc3NhZ2UuY3JlYXRlZEF0O1xyXG4gICAgICAgIHRoaXMuZW1vdGVNYW5hZ2VyID0gZW1vdGVNYW5hZ2VyO1xyXG4gICAgfVxyXG4gICAgVXNlck1lc3NhZ2UucHJvdG90eXBlLmRvbUVsZW1lbnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgdmFyIG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcclxuICAgICAgICB2YXIgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgLy9cclxuICAgICAgICB0ZXh0LnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lJztcclxuICAgICAgICAvL1xyXG4gICAgICAgIGNvbnRhaW5lci5jbGFzc05hbWUgPSBcIm1lc3NhZ2Utd3JhcHBlclwiO1xyXG4gICAgICAgIG5hbWUuY2xhc3NOYW1lID0gXCJtZXNzYWdlLXBvc3RlclwiO1xyXG4gICAgICAgIHRleHQuY2xhc3NOYW1lID0gXCJtZXNzYWdlLWNvbnRlbnQtd1wiO1xyXG4gICAgICAgIHZhciBtZXNzYWdlVGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgICAgIG1lc3NhZ2VUaW1lLmlubmVyVGV4dCA9IFwiW1wiICsgbmV3IERhdGUodGhpcy50aW1lKS50b0xvY2FsZVRpbWVTdHJpbmcoKSArIFwiXSBcIjtcclxuICAgICAgICBtZXNzYWdlVGltZS5zdHlsZS5jb2xvciA9IFwiZ3JheVwiO1xyXG4gICAgICAgIHZhciBuaWNrTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgICAgIG5pY2tOYW1lLmlubmVyVGV4dCA9IFwiPEBcIiArIHRoaXMudXNlck5hbWUgKyBcIj4gXCI7XHJcbiAgICAgICAgbmlja05hbWUuc3R5bGUuY29sb3IgPSB0aGlzLmNvbG9yO1xyXG4gICAgICAgIG5hbWUuYXBwZW5kQ2hpbGQobWVzc2FnZVRpbWUpO1xyXG4gICAgICAgIG5hbWUuYXBwZW5kQ2hpbGQobmlja05hbWUpO1xyXG4gICAgICAgIHRleHQuYXBwZW5kQ2hpbGQodGhpcy5lbW90ZU1hbmFnZXIuZW1vdGljb25pemUodGhpcy5jb250ZW50KSk7XHJcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG5hbWUpO1xyXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZXh0KTtcclxuICAgICAgICByZXR1cm4gY29udGFpbmVyO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBVc2VyTWVzc2FnZTtcclxufSgpKTtcclxuZXhwb3J0IHsgVXNlck1lc3NhZ2UgfTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn07XHJcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufTtcclxuaW1wb3J0IHsgU2VydmVyTWVzc2FnZSB9IGZyb20gXCIuL21lc3NhZ2VzL1NlcnZlck1lc3NhZ2VcIjtcclxuaW1wb3J0IHsgVXNlck1lc3NhZ2UgfSBmcm9tIFwiLi9tZXNzYWdlcy9Vc2VyTWVzc2FnZVwiO1xyXG5pbXBvcnQgRW1vdGVzIGZyb20gXCIuL0Vtb3Rlc1wiO1xyXG4vLyBpbXBvcnQgJy4vbGlicy9zdHlsZXNoZWV0cy9qcXVlcnkuY3NzZW1vdGljb25zLmNzcydcclxuLy8gY29uc3QgJCA9IHJlcXVpcmUoJ3Jhdy1sb2FkZXIhLi9saWJzL2phdmFzY3JpcHRzL2pxdWVyeS0xLjQuMi5taW4nKS5kZWZhdWx0XHJcbi8vIGNvbnN0IGpxRW1vdGVzID0gcmVxdWlyZSgncmF3LWxvYWRlciEuL2xpYnMvamF2YXNjcmlwdHMvanF1ZXJ5LmNzc2Vtb3RpY29ucycpXHJcbi8vIGNvbnNvbGUubG9nKGpxLCBqcUVtb3RlcylcclxudmFyIEdldE1lc3NhZ2VEdG8gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XHJcbiAgICBmdW5jdGlvbiBHZXRNZXNzYWdlRHRvKCkge1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIEdldE1lc3NhZ2VEdG87XHJcbn0oKSk7XHJcbnZhciBBZGRNZXNzYWdlRHRvID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xyXG4gICAgZnVuY3Rpb24gQWRkTWVzc2FnZUR0bygpIHtcclxuICAgIH1cclxuICAgIHJldHVybiBBZGRNZXNzYWdlRHRvO1xyXG59KCkpO1xyXG52YXIgTWFpbiA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcclxuICAgIGZ1bmN0aW9uIE1haW4oKSB7XHJcbiAgICAgICAgdGhpcy50ZXh0QXJlYSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJ0ZXh0YXJlYVwiKTtcclxuICAgICAgICB0aGlzLm1lc3NhZ2VDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm92ZXJ2aWV3XCIpO1xyXG4gICAgICAgIHdpbmRvdy50aW55c2Nyb2xsYmFyKCk7XHJcbiAgICAgICAgdGhpcy5DT0xPUlMgPSBbXCJ3aGl0ZVwiLCBcImJsdWVcIiwgXCJyZWRcIiwgXCJzYWxtb25cIiwgXCJncmVlblwiLCBcInllbGxvd1wiXTtcclxuICAgICAgICB0aGlzLmNvbW1hbmRzID0ge1xyXG4gICAgICAgICAgICBcIi9jb2xvclwiOiB0aGlzLmNoYW5nZUNvbG9yLFxyXG4gICAgICAgICAgICBcIi9uaWNrXCI6IHRoaXMuY2hhbmdlTmlja25hbWUsXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmVtb3RlTWFuYWdlciA9IG5ldyBFbW90ZXMoKTtcclxuICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgIH1cclxuICAgIE1haW4ucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICAhc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInVzZXJOYW1lXCIpXHJcbiAgICAgICAgICAgID8gc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcInVzZXJOYW1lXCIsIHByb21wdChcIlNldCB5b3VyIHVzZXJuYW1lXCIpKVxyXG4gICAgICAgICAgICA6IG51bGw7XHJcbiAgICAgICAgdGhpcy50ZXh0QXJlYS5hZGRFdmVudExpc3RlbmVyKFwia2V5cHJlc3NcIiwgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgaWYgKGUuY29kZSA9PT0gXCJFbnRlclwiKVxyXG4gICAgICAgICAgICAgICAgX3RoaXMuaGFuZGxlTWVzc2FnZVNlbmQoZSk7XHJcbiAgICAgICAgICAgIC8vIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vICAgY29uc3QgZWxhcHNlZExlbmd0aCA9IHRoaXMudGV4dEFyZWEudmFsdWUubGVuZ3RoICsgMTtcclxuICAgICAgICAgICAgLy8gICBjb25zdCB3b3JkQ291bnQgPSB0aGlzLnRleHRBcmVhLnZhbHVlLnNwbGl0KC9cXHMrLykubGVuZ3RoO1xyXG4gICAgICAgICAgICAvLyAgIGlmIChlbGFwc2VkTGVuZ3RoID4gMTAwIHx8IHdvcmRDb3VudCA+IDI1KSBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyB0aGlzLnRleHRBcmVhLmFkZEV2ZW50TGlzdGVuZXIoXCJwYXN0ZVwiLCAoZSkgPT4ge1xyXG4gICAgICAgIC8vICAgY29uc3QgcHJldlZhbHVlID0gdGhpcy50ZXh0QXJlYS52YWx1ZTtcclxuICAgICAgICAvLyAgIGNvbnN0IHBhc3RlVmFsdWUgPSBlLmNsaXBib2FyZERhdGEuZ2V0RGF0YShcInRleHRcIik7XHJcbiAgICAgICAgLy8gICBjb25zdCBzZWxlY3RlZFZhbHVlID0gd2luZG93LmdldFNlbGVjdGlvbigpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgLy8gICBjb25zdCBlbGFwc2VkV29yZENvdW50ID1cclxuICAgICAgICAvLyAgICAgcHJldlZhbHVlLnNwbGl0KC9cXHMrLykubGVuZ3RoIC1cclxuICAgICAgICAvLyAgICAgc2VsZWN0ZWRWYWx1ZS5zcGxpdCgvXFxzKy8pLmxlbmd0aCArXHJcbiAgICAgICAgLy8gICAgIHBhc3RlVmFsdWUuc3BsaXQoL1xccysvKS5sZW5ndGg7XHJcbiAgICAgICAgLy8gICBjb25zdCBlbGFwc2VkTGVuZ3RoID1cclxuICAgICAgICAvLyAgICAgcHJldlZhbHVlLmxlbmd0aCAtIHNlbGVjdGVkVmFsdWUubGVuZ3RoICsgcGFzdGVWYWx1ZS5sZW5ndGg7XHJcbiAgICAgICAgLy8gICBpZiAoZWxhcHNlZExlbmd0aCA8IDEwMCB8fCBlbGFwc2VkV29yZENvdW50IDwgMjUpIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAvLyB9KTtcclxuICAgICAgICB0aGlzLmZldGNoRGF0YSgpO1xyXG4gICAgfTtcclxuICAgIE1haW4ucHJvdG90eXBlLmNoYW5nZUNvbG9yID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBjdXJyQ29sb3IgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwiY29sb3JcIik7XHJcbiAgICAgICAgdmFyIG5ld0NvbG9yID0gdGhpcy5DT0xPUlNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5DT0xPUlMubGVuZ3RoKV07XHJcbiAgICAgICAgaWYgKGN1cnJDb2xvcikge1xyXG4gICAgICAgICAgICB3aGlsZSAobmV3Q29sb3IgPT09IGN1cnJDb2xvcilcclxuICAgICAgICAgICAgICAgIG5ld0NvbG9yID0gdGhpcy5DT0xPUlNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5DT0xPUlMubGVuZ3RoKV07XHJcbiAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oXCJjb2xvclwiLCBuZXdDb2xvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwiY29sb3JcIiwgbmV3Q29sb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBNYWluLnByb3RvdHlwZS5jaGFuZ2VOaWNrbmFtZSA9IGZ1bmN0aW9uICh1c2VyTmFtZSkge1xyXG4gICAgICAgIHZhciBwcmV2VXNlck5hbWUgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwidXNlck5hbWVcIik7XHJcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcInVzZXJOYW1lXCIsIHVzZXJOYW1lKTtcclxuICAgICAgICB2YXIgbWVzc2FnZSA9IG5ldyBTZXJ2ZXJNZXNzYWdlKFwiQ2hhbmdlZCB5b3VyIHVzZXJuYW1lIGZyb20gXCIgKyBwcmV2VXNlck5hbWUgKyBcIiwgdG8gXCIgKyB1c2VyTmFtZSk7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5DT0xPUlMsIHRoaXMuY29tbWFuZHMsIHRoaXMubWVzc2FnZUNvbnRhaW5lcik7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlQ29udGFpbmVyLmFwcGVuZENoaWxkKG1lc3NhZ2UuZG9tRWxlbWVudCgpKTtcclxuICAgICAgICB0aGlzLm1lc3NhZ2VDb250YWluZXIuc2Nyb2xsVG9wID0gdGhpcy5tZXNzYWdlQ29udGFpbmVyLnNjcm9sbEhlaWdodDtcclxuICAgIH07XHJcbiAgICBNYWluLnByb3RvdHlwZS5jaGVja0lmSXNDb21tYW5kID0gZnVuY3Rpb24gKG1lc3NhZ2UpIHtcclxuICAgICAgICB2YXIgX2EgPSBtZXNzYWdlLnNwbGl0KFwiIFwiKSwgZmlyc3RXb3JkID0gX2FbMF0sIHJlc3QgPSBfYS5zbGljZSgxKTtcclxuICAgICAgICBpZiAoZmlyc3RXb3JkID09PSBcIi9uaWNrXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VOaWNrbmFtZShyZXN0LmpvaW4oXCJcIikpO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGZpcnN0V29yZCA9PT0gXCIvY29sb3JcIikge1xyXG4gICAgICAgICAgICB0aGlzLmNoYW5nZUNvbG9yKCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZmlyc3RXb3JkID09PSAnL3F1aXQnKSB7XHJcbiAgICAgICAgICAgIHRoaXMucXVpdCA9IHRydWU7XHJcbiAgICAgICAgICAgIGFsZXJ0KCdvcHVzemN6b25vLCBuaWUgb3RyenltYXN6IG5vd3ljaCB3aWFkb21vxZtjaScpO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfTtcclxuICAgIE1haW4ucHJvdG90eXBlLmZldGNoRGF0YSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBkYXRhO1xyXG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoISF0aGlzLnF1aXQpIHJldHVybiBbMyAvKmJyZWFrKi8sIDRdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9tZXNzYWdlP2xhc3RNZXNzYWdlSWQ9XCIgKyBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwibGFzdElkXCIpKV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gWzQgLyp5aWVsZCovLCAoX2Euc2VudCgpKS5qc29uKCldO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YSA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5tZXNzYWdlcy5mb3JFYWNoKGZ1bmN0aW9uIChtZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdXNlck1lc3NhZ2UgPSBuZXcgVXNlck1lc3NhZ2UobWVzc2FnZSwgX3RoaXMuZW1vdGVNYW5hZ2VyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLm1lc3NhZ2VDb250YWluZXIuYXBwZW5kQ2hpbGQodXNlck1lc3NhZ2UuZG9tRWxlbWVudCgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5lbW90aWNvbnMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLm1lc3NhZ2VDb250YWluZXIuc2Nyb2xsVG9wID0gX3RoaXMubWVzc2FnZUNvbnRhaW5lci5zY3JvbGxIZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwibGFzdElkXCIsIGRhdGEubGFzdElkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5mZXRjaERhdGEoKV07XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5zZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF9hLmxhYmVsID0gNDtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6IHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbXBsZXhpdHlcclxuICAgIE1haW4ucHJvdG90eXBlLmhhbmRsZU1lc3NhZ2VTZW5kID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdmFyIHZhbHVlID0gdGhpcy50ZXh0QXJlYS52YWx1ZTtcclxuICAgICAgICBpZiAoIXZhbHVlIHx8IHZhbHVlLnRyaW0oKS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy50ZXh0QXJlYS52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuY2hlY2tJZklzQ29tbWFuZCh0aGlzLnRleHRBcmVhLnZhbHVlKSkge1xyXG4gICAgICAgICAgICB0aGlzLnRleHRBcmVhLnZhbHVlID0gXCJcIjtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJjb2xvclwiKSkge1xyXG4gICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwiY29sb3JcIiwgdGhpcy5DT0xPUlNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5DT0xPUlMubGVuZ3RoKV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgZGF0YSA9IHtcclxuICAgICAgICAgICAgY29udGVudDogZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlLnRyaW0oKSksXHJcbiAgICAgICAgICAgIHVzZXJOYW1lOiBlbmNvZGVVUklDb21wb25lbnQoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInVzZXJOYW1lXCIpKSxcclxuICAgICAgICAgICAgY29sb3I6IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJjb2xvclwiKSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMudGV4dEFyZWEudmFsdWUgPSBcIlwiO1xyXG4gICAgICAgIGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDo4MDgwL21lc3NhZ2VcIiwge1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXHJcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGRhdGEpLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBNYWluO1xyXG59KCkpO1xyXG5uZXcgTWFpbigpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9