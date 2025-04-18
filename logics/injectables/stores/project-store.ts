
import { Injectable } from "@angular/core"
import type Project from "../../../models/ProjectRepr"
import { Observable } from "../../contracts/Observers/Observable"

@Injectable({providedIn: 'root'})
export class ProjectStore extends Observable {
  private currentProject: Project = { 
  id: -1, 
  title: "à venir", 
  techs: ["les technologies figureront ici", "ici aussi"], 
  details: "Les détails du projet",
  content: "le contenu du projet (sa description plus exhaustive) serait ici !",
  images: ["s'il y a des images, elles figureront là,", "là", "et là" ]
};

  setCurrentProject(project: Project) {
    this.currentProject = project
    this.notifyObservers()
  }

  getCurrentProject() {
    return this.currentProject
  }
}