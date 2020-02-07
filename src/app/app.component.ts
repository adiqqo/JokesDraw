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
  public title = 'JokesDraw';
  @ViewChild(JokePopupComponent, { static: false })
  private childPopup: JokePopupComponent;
  @ViewChild(JokeTableComponent, { static: false })
  private childTable: JokeTableComponent;

  public dialog(joke: Joke): void {
    this.childPopup.openDialog(joke);
  }

  public getNewJokes(): void {
    this.childTable.restart();
  }
}


