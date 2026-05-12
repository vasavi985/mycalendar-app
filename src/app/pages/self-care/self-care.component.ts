import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BottomNavbarComponent } from '../../components/bottom-navbar/bottom-navbar.component';

@Component({
  selector: 'app-self-care',
  standalone: true,
  imports: [CommonModule, BottomNavbarComponent],
  templateUrl: './self-care.component.html',
  styleUrls: ['./self-care.component.css']
})
export class SelfCareComponent {}