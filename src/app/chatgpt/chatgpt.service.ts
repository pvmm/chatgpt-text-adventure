import { Injectable } from '@angular/core';
import { ChatGPTAPI } from 'chatgpt'

@Injectable({
  providedIn: 'root'
})
export class ChatGPTService {
  private api? : any = null;

  // constructor(@Optional() @SkipSelf() gptService?: ChatGPTService) {
  constructor() {
    // if (!process.env['OPENAI_API_KEY']) {
    //   throw Error('API key not defined')
    // }
    // this.api = new ChatGPTAPI({ apiKey: process.env['OPENAI_API_KEY'] })
  }

  async sendMessage(message: string) {
    // send a message and wait for the response
    let res = await this.api.sendMessage('What is OpenAI?')
  }

}
