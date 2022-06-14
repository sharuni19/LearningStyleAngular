import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-englishactivityportal',
  templateUrl: './englishactivityportal.component.html',
  styleUrls: ['./englishactivityportal.component.css'],
})
export class EnglishactivityportalComponent implements OnInit {
  levels: any;
  originalLevelsData: any;
  status = ['Completed', 'Not Completed', 'All'];
  levelName = [
    'Level 1',
    'Level 2',
    'Level 3',
    'Level 4',
    'Level 5',
    'Level 6',
    'Level 7',
    'Level 8',
    'Level 9',
    'Level 10',
    'Level 11',
    'Level 12',
    'Level 13',
    'Level 14',
    'Level 15',
    'All',
  ];
  selectedStatus: any;
  selectedLevel: any;
  constructor() {}

  ngOnInit() {
    this.originalLevelsData = [
      {
        Level: 'Level 1',
        Description: 'Questionnaire to identify learning style of the user',
        Completed: false,
      },
      {
        Level: 'Level 2',
        Description: 'Questionnaire to identify learning style of the user',
        Completed: false,
      },
      {
        Level: 'Level 3',
        Description: 'Questionnaire to identify learning style of the user',
        Completed: false,
      },
      {
        Level: 'Level 4',
        Description: 'Questionnaire to identify learning style of the user',
        Completed: false,
      },
      {
        Level: 'Level 5',
        Description: 'Questionnaire to identify learning style of the user',
        Completed: false,
      },
      {
        Level: 'Level 6',
        Description: 'Questionnaire to identify learning style of the user',
        Completed: false,
      },
      {
        Level: 'Level 7',
        Description: 'Questionnaire to identify learning style of the user',
        Completed: false,
      },
      {
        Level: 'Level 8',
        Description: 'Questionnaire to identify learning style of the user',
        Completed: false,
      },
      {
        Level: 'Level 9',
        Description: 'Questionnaire to identify learning style of the user',
        Completed: false,
      },
      {
        Level: 'Level 10',
        Description: 'Questionnaire to identify learning style of the user',
        Completed: false,
      },
      {
        Level: 'Level 11',
        Description: 'Questionnaire to identify learning style of the user',
        Completed: false,
      },
      {
        Level: 'Level 12',
        Description: 'Questionnaire to identify learning style of the user',
        Completed: false,
      },
      {
        Level: 'Level 13',
        Description: 'Questionnaire to identify learning style of the user',
        Completed: false,
      },
      {
        Level: 'Level 14',
        Description: 'Questionnaire to identify learning style of the user',
        Completed: false,
      },
      {
        Level: 'Level 15',
        Description: 'Questionnaire to identify learning style of the user',
        Completed: false,
      },
    ];
    this.levels = this.originalLevelsData;
  }

  getStatusFilter(event) {
    console.log(event);
    this.levels = [];
    for (var val of this.originalLevelsData) {
      if (event['value'] == 'Completed' && val['Completed'] == true) {
        this.levels.push(val);
      } else if (
        event['value'] == 'Not Completed' &&
        val['Completed'] == false
      ) {
        this.levels.push(val);
      } else if (event['value'] == 'All') {
        this.levels.push(val);
      }
    }
  }
  getLevelFilter(event) {
    console.log(event);
    this.levels = [];
    for (var val of this.originalLevelsData) {
      if (event['value'].trim() === val['Level'].trim()) {
        this.levels.push(val);
      } else if (event['value'].trim() === 'All') {
        this.levels.push(val);
      }
    }
  }
}
