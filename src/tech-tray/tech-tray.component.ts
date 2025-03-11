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
    { name: "Java", desc: "un des pioniers de l'OOP, toujours en constante mise à jour", iconLink: "https://shorturl.at/M4vMM" },
    { name: "Angular", desc: "ce portfolio est lui même codé en Angular !", iconLink: "https://shorturl.at/D7htb" },
    { name: "C++", desc: "actuellement en train d'apprendre QT !", iconLink: "https://shorturl.at/JvHyM" },
    { name: "JavaScript", desc: "Sans JS, rien de tout ça ne serait possible !", iconLink: "https://shorturl.at/t0poo"},
    { name: "UML", desc: "ce standard de modélisation aide tout les développeurs à réfléchir à la structure de leurs projets", iconLink: "https://shorturl.at/wPOib" },
    { name: "VueJS", desc: "un framework plus léger que Angular, très utilisé sur le marché ", iconLink: "https://shorturl.at/t3tE5"},
    { name: "Symfony", desc: "un framework PHP avec une forte philosophie de propreté, d'efficacité et de séparation", iconLink: "https://shorturl.at/9OXUR"},
    { name: "Git", desc: "Tout simplement essentiel", iconLink: "C:/Users/Tu tournes/Desktop/IUT/Cours S3/NG19_MS/src/assets/images/gitLogo.jpg"}
  ]
}
