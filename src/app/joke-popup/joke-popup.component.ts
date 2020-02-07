import { Component, Inject} from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Joke } from '../models/joke.model';

@Component({
  selector: 'app-joke-popup',
  templateUrl: 'joke-popup.component.html',
  styleUrls: ['joke-popup.component.css'],
})
export class JokePopupComponent {
  constructor(public dialog: MatDialog) { }
  public openDialog(joke: Joke): void {
    this.dialog.open(JokePopupDialogComponent, { data: joke });
  }
}

@Component({
  selector: 'app-dialog-content',
  templateUrl: 'dialog-content.html',
})
export class JokePopupDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<JokePopupDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Joke) { }
}
