import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames: string[] = ['Spiderman', 'Ironman', 'Hulk', 'She Hulk', 'Thor'];

  //deleteHero es im string opcional porque al inicio no hay ningun heroe borrado
  public deleteHero?: string;


  removeLastHero(): void  {
    this.deleteHero = this.heroNames.pop();
  }




}
