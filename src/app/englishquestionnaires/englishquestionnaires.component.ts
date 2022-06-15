import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-englishquestionnaires',
  templateUrl: './englishquestionnaires.component.html',
  styleUrls: ['./englishquestionnaires.component.css'],
})
export class EnglishquestionnairesComponent implements OnInit {
  questionOneAnswer: any;
  questionTwoAnswer: any;
  questionThreeAnswer: any;
  questionFourAnswer: any;
  questionFiveAnswer: any;
  questionSixAnswer: any;
  questionSevenAnswer: any;
  questionEightAnswer: any;
  questionNineAnswer: any;
  questionTenAnswer: any;
  task1 = false;
  readingLevel1 = false;
  visualLevel1 = false;
  auralLevel1 = false;
  kinesticLevel1 = true;
  constructor() {}

  ngOnInit() {}

  vegetables: Vegetable[] = [
    { name: 'apple' },
    { name: 'banana' },
    { name: 'strawberry' },
    { name: 'orange' },
    { name: 'kiwi' },
    { name: 'cherry' },
  ];

  drop(event: any) {
    console.log(event)
    moveItemInArray(this.vegetables, event.previousIndex, event.currentIndex);
  }
}
export interface Vegetable {
  name: string;
}
