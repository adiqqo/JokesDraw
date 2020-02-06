import { Component, ViewChild } from '@angular/core';
import { Joke } from './models/joke.model';
import { JokePopupComponent } from './joke-popup/joke-popup.component';
import { JokeTableComponent } from './joke-table/joke-table.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'JokesDraw';
  jokeMarked: Joke;
  @ViewChild(JokePopupComponent, { static: false }) childPopup: JokePopupComponent;
  @ViewChild(JokeTableComponent, { static: false }) childTable: JokeTableComponent;

  dialog(joke: Joke): void {
    this.childPopup.openDialog(joke);
  }

  getNewJokes(): void {
    this.childTable.restart();
  }
}


