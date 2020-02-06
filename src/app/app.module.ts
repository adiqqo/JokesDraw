import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule, MatSortModule, MatDialogModule, MatButtonModule, MatProgressBarModule, MatToolbarModule, MatIconModule } from '@angular/material';
import { JokeTableComponent } from './joke-table/joke-table.component';
import { JokePopupComponent, JokePopupDialogComponent } from './joke-popup/joke-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    JokeTableComponent,
    JokePopupComponent,
    JokePopupDialogComponent
  ],
  entryComponents: [JokePopupDialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatSortModule,
    MatDialogModule,
    MatButtonModule,
    MatProgressBarModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
