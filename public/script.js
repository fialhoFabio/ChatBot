// chatBotController.js
const ChatBot = new ChatBotController();

const chatBotElement = document.getElementById('chatBot');
const chat = chatBotElement.querySelector('div#chat');
const input = chatBotElement.querySelector('input');

const insertChatMessage = (message, isUserMessage = false) => {
  const className = isUserMessage ? 'user' : 'watson';
  const div = document.createElement('div');
  div.setAttribute('class', className);
  const p = document.createElement('p');
  p.innerText = message;
  chat.appendChild(div.appendChild(p));
};

input.addEventListener('keydown', (e) => {
  const isEnterKey = e.key === 'Enter';
  const haveUserMessage = !!input.value;
  if (isEnterKey && haveUserMessage) {
    const userMessage = input.value;
    insertChatMessage(userMessage, true);
    ChatBot.sendMessage(userMessage, res => insertChatMessage(res));
  }
});

ChatBot.sendMessage('', res => insertChatMessage(res));
