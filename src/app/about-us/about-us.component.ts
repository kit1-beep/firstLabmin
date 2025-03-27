import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-about-us',
  imports: [RouterOutlet,RouterLink],
  template: `
    <p>
      about-us works!
    </p>
  `,
  styles: ``
})
export class AboutUsComponent {

}
