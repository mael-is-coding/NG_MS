import { Routes } from '@angular/router';
import { WelcomeComponent } from '../welcome/welcome.component';
import { SkillsComponent } from '../skills/skills.component';

export const routes: Routes = [
    { path: '' , component: WelcomeComponent },
    { path: 'skills', component: SkillsComponent}
];