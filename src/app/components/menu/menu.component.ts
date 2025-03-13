import { Component, Inject, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent {
  constructor(@Inject('closeModalEvent') private closeModalEvent: () => void) {}

  closeMenu() {
    console.log('Fechar modal acionado!');
    this.closeModalEvent();
  }
}
