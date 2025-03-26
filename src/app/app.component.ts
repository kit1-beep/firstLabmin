import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PanelMenuModule } from 'primeng/panelmenu';
import { ButtonModule } from 'primeng/button';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,PanelMenuModule,ButtonModule ],
  
  template: `
    <h1>Welcome to {{title}}!</h1>
    <router-outlet></router-outlet>
    <router-outlet />
    <p-button label="Toggle All" [text]="true" (onClick)="toggleAll()" />
<p-panelmenu [model]="items" styleClass="w-full md:w-80" />
  `,
  styles: [],
})
export class AppComponent {
  items = [];
  toggleAll(){
    // items = [name];

  }
  title = 'firstLabmin';
}
