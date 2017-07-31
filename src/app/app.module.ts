import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoggerService } from './common/service/logger.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [LoggerService],  //根模块中注册的服务在整个应用中都能使用
  bootstrap: [AppComponent]
})
export class AppModule { }
