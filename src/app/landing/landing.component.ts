import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.sass']
})
export class LandingComponent implements OnInit {

  productos : any = [
    {nombre: "sillas", precio: 1000 },
    {nombre: "Carpas", precio: 35000 },
    {nombre: "Mesas", precio: 15000 },
    {nombre: "Maneteles", precio: 10000 },
    {nombre: "Velas", precio: 3000 },
    {nombre: "Cilindros", precio: 70000 },
    {nombre: "Platos", precio: 3000 },
    {nombre: "Cucharas", precio: 500 },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
