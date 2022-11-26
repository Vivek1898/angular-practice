import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { UserComponent } from './user/user.component';
import { CardComponent } from './components/interpolation/card/card.component';
import { MsgCardComponent } from './components/event-binding/msg-card/msg-card.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    CardComponent,
    MsgCardComponent
  ],
  imports: [
    BrowserModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
