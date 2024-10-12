import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  //PROPIEDADES
  public name: String = 'ironman';
  public age: Number = 45;


  get capitalizedName():string{
    return this.name.toLocaleUpperCase();
  }

  // METODOS
  getHeroDescription():string {
    return `${this.name} - ${this.age}`;
  }

  changeHero(): string{
    return this.name = 'Spiderman';
  }

  changeAge(): number{
    return this.age = 16;
  }

  resetForm(): void{
    this.name = 'ironman';
    this.age = 45;
  }

}
