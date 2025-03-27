import { Component, effect } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,RouterLink,MenubarModule,ButtonModule ],
  
  template: `
    <h1>Welcome to {{title}}!</h1>
    <router-outlet></router-outlet>
    <router-outlet />
    <!-- <p-toast /> -->
    <p-menubar [model]="items" />
    <a routerLink="/about-us"></a>
  `,
  styles: [],
})
export class AppComponent {
  items: MenuItem[] | undefined;
 
  constructor(){
      this.items = [{
        label: 'Home',
        icon: 'pi pi-home'
    },{
      label: 'About Us',
      icon: 'pi pi-star',
        
    }]; 


    effect(()=>{console.log(this.items)});
  }
  
  toggleAll(){
    // items = [name];

  }
  title = 'firstLabmin';
}
