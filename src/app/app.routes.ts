import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [{
            path: 'about-us',
            loadComponent: () =>
                import('./about-us/about-us.component').then((m) => m.AboutUsComponent),
        },
        {
            path: 'home',
            loadComponent: () =>
                import('./home/home.component').then((m) => m.HomeComponent),
        },
        {
            path: 'gallery',
            loadComponent: () =>
                import('./gallery/gallery.component').then((m) => m.GalleryComponent),
        },
        {
            path: 'not-found',
            loadComponent: () =>
                import('./not-found/not-found.component').then((m) => m.NotFoundComponent),
        },
    
    ]
    },
    

    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
    },
    {
        path: '**',
        redirectTo: 'not-found',
        pathMatch: 'full',
    },
];



