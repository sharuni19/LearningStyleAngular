import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { MatDialog } from '@angular/material/dialog';
import { RatingComponent } from '../rating/rating.component';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'determinate';
  value = 100;
  ratingResult: any;
  constructor(public dialog: MatDialog) {}

  ngOnInit() {}
  openRatingDialog() {
    const dialogRef = this.dialog.open(RatingComponent);

    dialogRef.afterClosed().subscribe((result) => {
      this.ratingResult = result;
      console.log(this.ratingResult);
    });
  }
}
