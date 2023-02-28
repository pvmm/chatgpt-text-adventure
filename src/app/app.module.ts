import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TextWindowComponent } from './text-window-component/text-window.component';
import { ChatGPTService } from './chatgpt/chatgpt.service';

@NgModule({
  declarations: [
    AppComponent,
    TextWindowComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
