import { Component, effect } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule ],
  
  template: `
    <!-- <p-toast /> -->
   
    <router-outlet></router-outlet>
    <!-- <a routerLink="/home/home"></a> -->
  `,
  styles: [],
})
export class AppComponent {
  
  title = 'firstLabmin';
}
