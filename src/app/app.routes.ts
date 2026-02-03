import { Routes } from '@angular/router';
import { discordRedirectGuard } from './auth/discord-redirect.guard';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'discord',
        canActivate: [discordRedirectGuard],
        component: HomeComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
];