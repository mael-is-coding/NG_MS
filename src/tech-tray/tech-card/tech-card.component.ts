import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tech-card',
  imports: [],
  templateUrl: './tech-card.component.html',
  styleUrl: './tech-card.component.css'
})
export class TechCardComponent {
  @Input() name: string = ''
  @Input() desc: string = ''
  @Input() link?: string = ''
}
