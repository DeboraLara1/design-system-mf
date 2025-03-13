import { CommonModule } from '@angular/common';
import { Component, Inject, Input } from '@angular/core';
import { InputComponent } from '../input/input.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modalnewcliente',
  standalone: true,
  imports: [CommonModule, InputComponent, FormsModule],
  templateUrl: './modalnewcliente.component.html',
  styleUrls: ['./modalnewcliente.component.css'],
})
export class ModalnewclienteComponent {
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
