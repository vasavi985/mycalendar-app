import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BottomNavbarComponent } from '../../components/bottom-navbar/bottom-navbar.component';

@Component({
  selector: 'app-add-entry',
  standalone: true,
  imports: [CommonModule, BottomNavbarComponent],
  templateUrl: './add-entry.component.html',
  styleUrls: ['./add-entry.component.css']
})
export class AddEntryComponent {}