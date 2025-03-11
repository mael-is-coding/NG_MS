import { Renderer2, ElementRef, Directive, Inject, HostListener, AfterViewInit } from '@angular/core'
import { WINDOW } from '../../logics/injectables/window.token'

@Directive({
  selector: '[appScrollChange]'
})
export class ScrollChangeDirective implements AfterViewInit {

    private element: ElementRef
    private renderer: Renderer2
    private window: Window

    constructor (@Inject(WINDOW) win: Window, element: ElementRef, renderer: Renderer2) {
      this.element = element
      this.renderer = renderer
      this.window = win
    }

    @HostListener('window:scroll')
    ngAfterViewInit(): void {
      this.change()
    }

    change() {
      this.renderer.setStyle(this.element.nativeElement, "width", `${(this.window.scrollY / (this.window.document.body.scrollHeight - this.window.innerHeight)) * 100}%`);
    }

}
