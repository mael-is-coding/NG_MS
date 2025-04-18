import { Component, Input } from '@angular/core';
import type Project from "../../models/ProjectRepr.ts";
import { OneProjectComponent } from "./one-project/one-project.component";
import  { RouterOutlet } from "@angular/router"

@Component({
  selector: 'app-project-view',
  imports: [OneProjectComponent, RouterOutlet],
  templateUrl: './project-view.component.html',
  styleUrl: './project-view.component.css'
})
export class ProjectViewComponent {
  @Input() projects: Project[] = [
    {
      id: 1,  
      title: "Douzhee", 
      techs: ["JS", "PHP"], 
      details: "une reprise du jeu de dés Yahtzee",
      content: "Développé en 5 mois, cette application nous a appris énormément de concepts techniques cruciaux ,"
      +" tels que le concept d'une API, la séparation des buts avec la séparation entre vues et données, le code asynchrone"
      + " mais aussi des compétences non-techniques, comme le travail en mode AGILE, "
      + "l'importance de la communication interne, une gestion organisée et régularisée du projet (avec notamment Git).",
      images: ["https://i.imgur.com/ruXEJcI.png", "https://i.imgur.com/VfZO8pS.png", "https://i.imgur.com/AInpcpU.png"]
    },
    {
      id: 2,  
      title: "Portfolio", 
      techs: ["Angular", "TS", "Alpine Linux", "apache2", "openSSH", "PHP"], 
      details: "Mon portefeuille de compétences. Il contient mes réalisations, enseignements et compétences",
      content: "à compléter",
      images: []
    }
  ]

}
