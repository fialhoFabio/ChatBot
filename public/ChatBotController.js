/*  eslint no-underscore-dangle: ["error", { "allowAfterThis": true }]  */

// its used on chatBotScript.js
class ChatBotController {
  constructor() {
    this.conversation_id = {};
    this.uri = 'http://localhost:3000/conversation/';
  }

  _requestWatsonResponse(text) {
    return fetch(this.uri, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        context: this.conversation_id,
        text,
      }),
    });
  }

  async _resolveWatsonResponseData(value) {
    const response = await this._requestWatsonResponse(value);
    return response.json();
  }

  async sendMessage(userMessage = '', cb) {
    const data = await this._resolveWatsonResponseData(userMessage);
    this.conversation_id = data.context;
    cb(data.output.text);
  }
}
