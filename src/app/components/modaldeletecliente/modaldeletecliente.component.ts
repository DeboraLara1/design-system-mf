import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modaldeletecliente',
  imports: [],
  templateUrl: './modaldeletecliente.component.html',
  styleUrl: './modaldeletecliente.component.css',
})
export class ModaldeleteclienteComponent {
  @Input() clientData: any;

  constructor(
    @Inject('closeModalEvent') private closeModalEvent: () => void,
    @Inject('submitClientEvent')
    private submitClientEvent: (client: any) => void,
    @Inject('clientData') private injectedClientData: any
  ) {
    this.clientData = injectedClientData || {
      id:'',
      name:''
    };
  }

  onConfirm() {
    console.log('Cliente criado:', this.clientData);
    this.submitClientEvent(this.clientData);
  }

  closeModal() {
    console.log('Fechar modal acionado!');
    this.closeModalEvent();
  }
}
