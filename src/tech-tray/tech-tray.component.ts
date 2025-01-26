import { Component } from '@angular/core';
import { TechCardComponent } from './tech-card/tech-card.component';

interface skillContent {
  name: string, 
  desc: string,
  iconLink?: string
}

@Component({
  selector: 'app-tech-tray',
  imports: [TechCardComponent],
  templateUrl: './tech-tray.component.html',
  styleUrl: './tech-tray.component.css'
})
export class TechTrayComponent {
  skills: Array<skillContent> = [
    { name: "Java", desc: "un des pioniers de l'OOP, toujours en constante mise à jour" },
    { name: "Angular", desc: "ce portfolio est lui même codé en Angular !" },
    { name: "C++", desc: "actuellement en train d'apprendre QT !" }
  ]
}
