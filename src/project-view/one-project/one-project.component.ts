import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import type Project from "../../../models/ProjectRepr";
import { ProjectStore } from '../../../logics/injectables/stores/project-store';
import { Observer } from "../../../logics/contracts/Observers/Observer";
 
@Component({
  selector: 'app-one-project',
  imports: [],
  templateUrl: './one-project.component.html',
  styleUrl: './one-project.component.css'
})
export class OneProjectComponent { //implements Observer {

  @Input() project: Project = { 
    id: -1, 
    title: "Sélectionnez un projet !", 
    techs: ["les technologies figureront ici", "ici aussi"], 
    details: "Le projet sélectionné et ses détails seront ici !",
    content: "le contenu du projet (sa description plus exhaustive) serait ici !",
    images: ["s'il y a des images, elles figureront là,", "là", "et là" ]
  }

  router: Router
  route: ActivatedRoute
  projectStore: ProjectStore

  constructor(router: Router, route: ActivatedRoute, projectStore: ProjectStore){
    this.router = router
    this.route = route,
    this.projectStore = projectStore
  }


  goToProject(project: Project) {
    this.router.navigate([project.title.toLowerCase()], { relativeTo: this.route })
    this.projectStore.setCurrentProject(project)
  }

}
