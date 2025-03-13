import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button',
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Output() navigate: EventEmitter<void> = new EventEmitter();
  @Input() route: string = '/clientes';
  shouldShowRouterOutlet: boolean = true;

  constructor(private router: Router) {}

  onClick() {

    this.router.navigateByUrl('/clientes');
  }
}
