import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BoardComponent } from './components/board/board.component';
import { SmallContComponent } from './components/small-cont/small-cont.component';
import { SortByOrderPipe } from './pipes/sort-by-order.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    SmallContComponent,
    SortByOrderPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
