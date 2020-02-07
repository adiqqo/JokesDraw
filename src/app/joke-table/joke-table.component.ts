import { Component, OnInit, ViewChild, AfterViewInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { JokesService } from '../services/jokes.service';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Joke } from '../models/joke.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-joke-table',
  templateUrl: './joke-table.component.html',
  styleUrls: ['./joke-table.component.css']
})
export class JokeTableComponent implements OnInit, AfterViewInit, OnDestroy {
  private subscription: Subscription;
  public loading = true;
  public displayedColumns: string[] = ['id', 'type', 'setup'];
  public dataSource = new MatTableDataSource<Joke>();
  @Output()
  public eventDialog = new EventEmitter<Joke>();
  @ViewChild(MatSort, { static: false })
  public sort: MatSort;

  constructor(private jokeService: JokesService) { }

  public restart(): void {
    this.loading = true;
    this.getAllJokes();
  }

  public dialog(row: Joke): void {
    this.eventDialog.emit(row);
  }

  public getAllJokes() {
    this.subscription = this.jokeService.getJokes().subscribe(joke => {
      this.dataSource.data = joke as Joke[];
      this.loading = false;
    });
  }

  ngOnInit(): void {
    this.getAllJokes();
  }
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
