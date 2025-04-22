import { Component } from '@angular/core';
import { RouterOutlet,RouterLink } from '@angular/router';
import { MegaMenuItem } from 'primeng/api';
import { MegaMenu } from 'primeng/megamenu';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  imports: [MegaMenu],
  template: `
    <div class="card">
    <p-megaMenu [model]="items" orientation="vertical" styleClass="full-height-menu" />
    </div>
   
    
  `,
  styles: `
  .sidebar {
    height: 100%;
    width: 100%;
  }
  
  :host ::ng-deep .full-height-menu {
    height: 100%;
    width: 100%;
  }
  
  :host ::ng-deep .p-megamenu.p-megamenu-vertical {
    width: 100%;
    height: 100%;
  }
`
})
export class SideMenuComponent {

  constructor(private router: Router) {
    //below is how you can check what is being displayed 
    // effect(()=>{console.log(this.items)});
  }
  items: MegaMenuItem[] | undefined;

  ngOnInit() {
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
      
  },
  {
    label: 'login',
    icon: 'pi pi-star',
      command: () => {
        this.router.navigate(['/login']);
    }
  }]; 

}
}
