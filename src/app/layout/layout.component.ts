import { Component,effect } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-layout',
  imports: [RouterOutlet,MenubarModule,ButtonModule,CommonModule ],
  template: `
   <p-menubar [model]="items" />
    <p>
      layout works!
    </p>
    <router-outlet></router-outlet>
  `,
  styles: ``
})
export class LayoutComponent {

  items: MenuItem[] | undefined;
 
  constructor(private router: Router) {
    //below is how you can check what is being displayed 
    // effect(()=>{console.log(this.items)});
  }

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


   
  }
  
  toggleAll(){

  }

}
