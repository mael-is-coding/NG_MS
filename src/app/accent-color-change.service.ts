import { Injectable, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '../../logics/injectables/document.token'

@Injectable({
  providedIn: 'root'
})
export class AccentColorChangeService {

  private hexAccentColor: string;
  private document: Document;
  private renderer: Renderer2|undefined;


  constructor(@Inject(DOCUMENT) doc: Document) {
    this.hexAccentColor = "#9246F4"; // purple by default
    this.document = doc;
  }

  setAccentColor(color: string, renderer2: Renderer2) {

    console.dir(renderer2)

    if (this.renderer == undefined) { this.renderer = renderer2; }

    if (/^#[A-Z|a-z|0-9]{3}$|^#[A-Z|a-z|0-9]{6}|^#[A-Z|a-z|0-9]{8}/.test(color)) {
      this.hexAccentColor = color;
    } else {
      this.hexAccentColor = "#f54842"; // tomato red, it's cool yet it signals an error
    }

    this.renderer.setProperty(this.document, '--accent-color', this.hexAccentColor);
  }

}
