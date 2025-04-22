import { Component, effect } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { FormsModule } from '@angular/forms';
import { SideMenuComponent } from '../side-menu/side-menu.component';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, MenubarModule, ButtonModule, CommonModule, ToggleSwitchModule, FormsModule, SideMenuComponent],
  template: `
    <div class="layout-wrapper">
      <!-- Top menubar -->
      <div class="menubar-container">
        <p-menubar>
          <ng-template #start>
          </ng-template>
          <ng-template #end>
            <div class="flex items-center gap-2">
              <p-toggleswitch [(ngModel)]="checked" trueValue="yes" falseValue="no" (onChange)="toggleDarkMode()"/>
            </div>
          </ng-template>
        </p-menubar>
      </div>
      
      <!-- Main content area with sidebar and content -->
      <div class="main-container">
        <!-- Left sidebar menu -->
        <div class="sidebar-container">
          <app-side-menu></app-side-menu>
        </div>
        
        <!-- Content area -->
        <div class="content-container">
          <router-outlet></router-outlet>
        </div>
      </div>
    </div>
  `,
  styles: `
    .layout-wrapper {
      display: flex;
      flex-direction: column;
      height: 100vh;
      width: 100vw;
      overflow: hidden;
    }
    
    .menubar-container {
      width: 100%;
      flex-shrink: 0;
      z-index: 100;
    }
    
    .main-container {
      display: flex;
      flex: 1;
      overflow: hidden;
    }
    
    .sidebar-container {
      width: 250px;
      height: 100%;
      overflow-y: auto;
      background-color: var(--surface-card);
      box-shadow: 0 0 10px rgba(0,0,0,0.1);
      flex-shrink: 0;
    }
    
    .content-container {
      flex: 1;
      padding: 20px;
      overflow-y: auto;
    }
    
    /* For responsive design - hide sidebar on small screens */
    @media (max-width: 768px) {
      .sidebar-container {
        width: 0;
        display: none;
      }
    }
  `
})
export class LayoutComponent {
  items: MenuItem[] | undefined;
  checked: boolean = false;
 
  constructor(private router: Router) {
    // effect(()=>{console.log(this.items)});
  }

  ngOnInit(){
    this.toggleDarkMode();
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
  
  toggleAll(){
  }
}