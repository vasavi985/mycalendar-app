import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-bottom-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './bottom-navbar.component.html',
  styleUrls: ['./bottom-navbar.component.css']
})
export class BottomNavbarComponent {}