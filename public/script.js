import ChatBotController from './ChatBotController';

const ChatBot = new ChatBotController();
console.log(ChatBot.getAnswer());

const chatBot = document.getElementById('chatBot');
const input = chatBot.querySelector('input');
const chat = chatBot.querySelector('div#chat');

const templateChatMessage = (message, from) => (`
  <div class = ${from}">
    <p>${message}</p>
  </div>
`);

// Crate a Element and append to chat
const InsertTemplateInTheChat = (template) => {
  const div = document.createElement('div');
  div.innerHTML = template;

  chat.appendChild(div);
};

// Calling server and get the watson output
const getWatsonMessageAndInsertTemplate = (text = '') => {
  const template = templateChatMessage(ChatBot.getAnswer(text), 'watson');
  InsertTemplateInTheChat(template);
};

input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && input.value) {
    // Send the user message
    getWatsonMessageAndInsertTemplate(input.value);

    const template = templateChatMessage(input.value, 'user');
    InsertTemplateInTheChat(template);

    input.value = '';
  }
});

getWatsonMessageAndInsertTemplate();
