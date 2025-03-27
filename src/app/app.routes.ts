import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path :'About-us',
        loadComponent: () =>
            import('./about-us/about-us.component').then((m) => m.AboutUsComponent),
    }
];
