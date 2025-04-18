import { Routes } from '@angular/router';
import { WelcomeComponent } from '../welcome/welcome.component';
import { SkillsComponent } from '../skills/skills.component';
import { TimeLineComponent } from '../time-line/time-line.component';
import { ProjectViewComponent } from '../project-view/project-view.component';
import { OneProjectPageComponent } from '../project-view/one-project-page/one-project-page.component';

export const routes: Routes = [
    { path: '' , component: WelcomeComponent },
    { path: 'skills', component: SkillsComponent },
    { path: 'timeline', component: TimeLineComponent },
    {
      path: 'projects',
      component: ProjectViewComponent,
      children: [
        {
          path: ":identifier",
          component: OneProjectPageComponent
        }
      ]
    }
];
