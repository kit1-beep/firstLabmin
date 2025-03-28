import { Component, effect } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,MenubarModule,ButtonModule,CommonModule ],
  
  template: `
    <!-- <p-toast /> -->
    <p-menubar [model]="items" />
    <h1>Welcome to {{title}}!</h1>
    <router-outlet></router-outlet>
    <router-outlet />
    <!-- <a routerLink="/home/home"></a> -->
  `,
  styles: [],
})
export class AppComponent {
  items: MenuItem[] | undefined;
 
  constructor(private router: Router) {}

  ngOnInit(){
      this.items = [{
        label: 'Home',
        icon: 'pi pi-home',
        command: () => {
          this.router.navigate(['/home']);
      }
    },
    {
      label: 'Gallery',
      icon: 'pi pi-star',
      command: () => {
        this.router.navigate(['/gallery']);
      }
    },
    {
      label: 'About Us',
      icon: 'pi pi-star',
      command: () => {
        this.router.navigate(['/about-us']);
    }
        
    }]; 


    effect(()=>{console.log(this.items)});
  }
  
  toggleAll(){

  }
  title = 'firstLabmin';
}
