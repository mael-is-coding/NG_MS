import { Component, Input } from '@angular/core';
import type Project from "../../../models/ProjectRepr"
import { ProjectStore }  from "../../../logics/injectables/stores/project-store"
import  { Observer } from "../../../logics/contracts/Observers/Observer"

@Component({
  selector: 'app-project-detail-component',
  imports: [],
  templateUrl: './project-detail-component.component.html',
  styleUrl: './project-detail-component.component.css'
})

export class ProjectDetailComponent implements Observer {
  @Input() project: Project | null = null;
  projectStore: ProjectStore | null = null

  constructor(projectStore: ProjectStore) {
    this.projectStore = projectStore
    this.project = projectStore.getCurrentProject()
    projectStore.subscribe(this)
  }

  update() {
    this.project = this.projectStore!!.getCurrentProject()
  }
}
