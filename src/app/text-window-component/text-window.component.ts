import { Component } from '@angular/core';
import { ViewChild } from "@angular/core";
import { ElementRef } from "@angular/core";
import { ChatGPTService } from '../chatgpt/chatgpt.service';

@Component({
  selector: 'text-window',
  templateUrl: './text-window.component.html',
  styleUrls: ['./text-window.component.less']
})
export class TextWindowComponent {
  @ViewChild("userInput", {static: false})
  userInput!: ElementRef;

  @ViewChild("consoleOutput", {static: false})
  consoleOutput!: ElementRef;

  constructor(private chatgpt: ChatGPTService) { }

  on_enter_key_up(event: any) {
    // TODO: send command to chatGPT
    let consoleOutput = this.consoleOutput.nativeElement;
    let userInput = this.userInput.nativeElement;
    consoleOutput.innerText += "\n∷ " + userInput.value;
    userInput.value = "";
  } 
}
