// chatBotController.js
const ChatBot = new ChatBotController();

const chatBotElement = document.getElementById('chatBot');
const chat = chatBotElement.querySelector('div#chat');
const input = chatBotElement.querySelector('div#chatBot > input');
const sendMessageButton = chatBotElement.querySelector('div#chatBot > img');

const insertChatMessage = (message, isUserMessage = false) => {
  const className = isUserMessage ? 'from-user' : 'from-watson';
  const div = document.createElement('div');
  div.setAttribute('class', className);
  chat.appendChild(div);
  const innerMessage = document.createElement('div');
  innerMessage.setAttribute('class', 'inner-message');
  div.appendChild(innerMessage);
  const p = document.createElement('p');
  p.innerText = message;
  innerMessage.appendChild(p);
  chat.scrollTop = chat.scrollHeight;
};

const handleMessage = (e) => {
  const isValid = e.key === 'Enter' || e.type === 'click';
  const haveUserMessage = !!input.value;
  if (isValid && haveUserMessage) {
    const userMessage = input.value;
    insertChatMessage(userMessage, true);
    ChatBot.sendMessage(userMessage, res => insertChatMessage(res));
    input.value = '';
  }
}

input.addEventListener('keydown', handleMessage);
sendMessageButton.addEventListener('click', handleMessage);

ChatBot.sendMessage('', res => insertChatMessage(res));
