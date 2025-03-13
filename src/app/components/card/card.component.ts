import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { ModalnewclienteComponent } from '../modalnewcliente/modalnewcliente.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-card',
  imports: [CommonModule, ModalnewclienteComponent,FormsModule ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Output() submitClientEvent = new EventEmitter<any>();
  client = {
    name: '',
    salary: '',
    companyValuation: '',
  };
  cardData: any = {};

  constructor(@Inject('cardData') private data: any) {
    this.cardData = data;
  }

  ngOnInit(): void {
    console.log("this.cardData", this.cardData);
  }

  isModalOpen = false;

  onOpenModal() {
    console.log('Abrindo o modal diretamente no CardComponent!');
    this.isModalOpen = true;
  }

  closeModal() {
    console.log('Fechando o modal diretamente no CardComponent!');
    this.isModalOpen = false; 
  }

  createClientCard(clientData: any) {
    console.log('Cliente a ser criado:', clientData);
    this.submitClientEvent.emit(clientData);
  }

}
