import { Routes } from '@angular/router';
import { discordRedirectGuard } from './auth/discord-redirect.guard';
import { LandingComponent } from './pages/landing/landing.component';
import { RoleplayComponent } from './pages/roleplay/roleplay.component';

export const routes: Routes = [
    {
        path: '',
        component: LandingComponent
    },
    {
        path: 'roleplay',
        component: RoleplayComponent
    },
    {
        path: 'discord',
        canActivate: [discordRedirectGuard],
        component: LandingComponent
    },
    {
        path: '**',
        redirectTo: ''
    }
];
