import { Component, Renderer2 } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AccentColorChangeService } from '../app/accent-color-change.service'

@Component({
  selector: 'app-top-nav',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './top-nav.component.html',
  styleUrl: './top-nav.component.css'
})
export class TopNavComponent {
  public colorService: AccentColorChangeService
  public renderer2: Renderer2

  constructor(public colorServ: AccentColorChangeService, public renderer: Renderer2) {
    this.colorService = colorServ;
    this.renderer2 = renderer;
  }
}