import { Component,effect } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet,MenubarModule,ButtonModule,CommonModule,ToggleSwitchModule,FormsModule ],
  template: `
   <p-menubar [model]="items" >
   <ng-template #end>
    <div class="flex items-center gap-2">
    <p-toggleswitch [(ngModel)]="checked" trueValue="yes" falseValue="no" (onChange)="toggleDarkMode()"/>
      
    </div>
   </ng-template>
   </p-menubar>
   
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
  toggleDarkMode() {
    const element = document.querySelector('html')!;
    element.classList.toggle('my-app-dark');
  }
  checked: boolean = false;

  
  
  toggleAll(){

  }

}
