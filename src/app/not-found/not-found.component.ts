import { Component } from '@angular/core';
import { Image } from 'primeng/image';
import { ImageModule } from 'primeng/image';

@Component({
  selector: 'app-not-found',
  imports: [Image,ImageModule],
  standalone: true,
  template: `

<div class="card flex justify-center">
    <p-image src="images/404.png" alt="404 Not found" class="center" width="800" />    
</div>
  `,
  styles: `.center {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
  }`
})
export class NotFoundComponent {

}
