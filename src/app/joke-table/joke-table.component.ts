import { Component, OnInit, ViewChild, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { JokesService } from '../services/jokes.service';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Joke } from '../models/joke.model';

@Component({
  selector: 'app-joke-table',
  templateUrl: './joke-table.component.html',
  styleUrls: ['./joke-table.component.css']
})
export class JokeTableComponent implements OnInit, AfterViewInit {

  displayedColumns = ['id', 'type', 'setup'];
  public dataSource = new MatTableDataSource<Joke>();
  @Output()
  eventDialog = new EventEmitter<Joke>();
  loading = true;
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  constructor(private jokeService: JokesService) { }

  ngOnInit(): void {
    this.getAllJokes();
  }

  restart(): void {
    this.loading = true;
    this.getAllJokes();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  public dialog(row: Joke): void {
    this.eventDialog.emit(row);
  }
  public getAllJokes = () => {
    this.jokeService.getJokes().subscribe(joke => {
      this.dataSource.data = joke as Joke[];
      this.loading = false;
    });
  }
}
