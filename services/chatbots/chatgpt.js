const FetchService = require('../fetchService.js');
const OpenAI = require('openai');
const fs = require('fs');

/**
 * ChatGPT Class
 * 
 *
 * @category Services
 * @class
 */
class ChatGPT {
  constructor() {
    this.apiDomain = 'https://webapi.mt.gob.do';
    // Set up OpenAI API credentials
    this.openai = new OpenAI({ apiKey: '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' });
  }

  async initChatbot(file_ids, instructions) {
    try {
        const assistant = await this.openai.beta.assistants.create({
            name: `AletheiaGPT-${Date.now()}`,
            description: "ChatGPT for Aletheia Data",
            instructions,
            model: "gpt-3.5-turbo-1106",
            tools: [{"type": "code_interpreter"}],
            file_ids: file_ids
        });
        return assistant;
    } catch (error) {
      console.error('Error generating answer:', error);
      return null;
    }
  }

  // Function to generate an answer based on the content and question
  async initChatbotWithFilePath(filePath, instructions) {
    console.log(filePath);
    try {
      // Upload a file with an "assistants" purpose
      const file = await this.openai.files.create({
        file: fs.createReadStream(filePath),
        purpose: "assistants",
      });
      console.log('file uploaded: ', file);
      const assistant = await this.initChatbot([file.id], instructions);
      return assistant;
    } catch (error) {
      console.error('Error generating answer:', error);
      return null;
    }
  }

}

module.exports = ChatGPT;