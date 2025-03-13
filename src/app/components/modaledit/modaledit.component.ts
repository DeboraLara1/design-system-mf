import { Component, Inject, Input } from '@angular/core';
import { InputComponent } from '../input/input.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modaledit',
  imports: [CommonModule, InputComponent, FormsModule],
  templateUrl: './modaledit.component.html',
  styleUrl: './modaledit.component.css'
})
export class ModaleditComponent {
@Input() clientData: any;

  constructor(
    @Inject('closeModalEvent') private closeModalEvent: () => void,
    @Inject('submitClientEvent') private submitClientEvent: (client: any) => void,
    @Inject('clientData') private injectedClientData: any
  ) {
    this.clientData = injectedClientData || { name: '', salary: '', companyValuation: '' };
  }

  onSubmit() {
    console.log('Cliente criado:', this.clientData);
    this.submitClientEvent(this.clientData);
  }

  closeModal() {
    console.log('Fechar modal acionado!');
    this.closeModalEvent();
  }
}
