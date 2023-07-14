import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BoardComponent } from './components/board/board.component';
import { SmallContComponent } from './components/small-cont/small-cont.component';
import { SortByOrderPipe } from './pipes/sort-by-order.pipe';
import { MediumContComponent } from './components/medium-cont/medium-cont.component';
import { FullContComponent } from './components/full-cont/full-cont.component';
import { SearchFilterPipe } from './pipes/search-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    SmallContComponent,
    SortByOrderPipe,
    MediumContComponent,
    FullContComponent,
    SearchFilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
