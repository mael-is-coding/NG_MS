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
    { name: "Java", desc: "un des pioniers de l'OOP, toujours en constante mise à jour", iconLink: "https://www.minecraftkrant.nl/media/166/java-logo.png" },
    { name: "Angular", desc: "ce portfolio est lui même codé en Angular !", iconLink: "https://miro.medium.com/v2/resize:fit:1200/1*Klh1l7wkoG6PDPb9A5oCHQ.png" },
    { name: "C++", desc: "actuellement en train d'apprendre QT !", iconLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/459px-ISO_C%2B%2B_Logo.svg.png?20170928190710" },
    { name: "JavaScript", desc: "Sans JS, rien de tout ça ne serait possible !", iconLink: "https://th.bing.com/th/id/OIP.BMXxh0nGocZLZfbY8m17UwHaHa?rs=1&pid=ImgDetMain"},
    { name: "UML", desc: "ce standard de modélisation aide tout les développeurs à réfléchir à la structure de leurs projets", iconLink: "https://3.bp.blogspot.com/-g6UgpDt9i1s/Wk74AE_Az2I/AAAAAAAAO7w/ira1ePnnBBQlWSrXBDKaFoAMXF-TyMFlgCLcBGAs/s1600/UML.gif" }
  ]
}
