import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  name:string = 'Peter';
  age:number = 18

  get capitalizedName():string {
    return this.name.toUpperCase()
  }

  getHeroDescription():string {
    return this.name + ' - ' + this.age
  }

  changeName():void {
    this.name = 'Batman'
  }

  changeAge():void {
    this.age = 31
  }

  resetForm():void {
    this.name = 'Peter'
    this.age = 18
  }
}
