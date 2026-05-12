import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-period-edit',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './period-edit.component.html',
  styleUrls: ['./period-edit.component.css']
})
export class PeriodEditComponent {

  days = Array.from(
    { length: 31 },
    (_, i) => i + 1
  );

  selectedDays: number[] = [];

  constructor(
    private router: Router
  ) {}

  selectDay(day:number){

    if(
      this.selectedDays.includes(day)
    ){

      this.selectedDays =
        this.selectedDays.filter(
          d => d !== day
        );

    } else {

      this.selectedDays.push(day);
    }
  }

  savePeriod(){

    localStorage.setItem(
      'selectedPeriodDays',
      JSON.stringify(
        this.selectedDays
      )
    );

    this.router.navigate(['/']);
  }

}