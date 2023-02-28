import { Injectable } from '@angular/core';
import { ChatGPTAPI } from 'chatgpt'
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChatGPTService {
  private api? : any = null;

  // constructor(@Optional() @SkipSelf() gptService?: ChatGPTService) {
  constructor() {
    if (!environment['OPENAI_API_KEY']) {
      throw Error('API key not defined');
    }
    this.api = new ChatGPTAPI({ apiKey: environment['OPENAI_API_KEY'] });
  }

  async sendMessage(message: string) {
    // send a message and wait for the response
    let res = await this.api.sendMessage('What is OpenAI?')
  }

}
