import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personalizado',
  templateUrl: './personalizado.page.html',
  styleUrls: ['./personalizado.page.scss'],
})
export class PersonalizadoPage implements OnInit {
  frutas=[
    {
      img:'assets/img/frutilla.png',
      titulo:'Frutilla'
    },
    {
      img:'assets/img/manzana.png',
      titulo:'manzana'
    },
    {
      img:'assets/img/naranja.png',
      titulo:'naranja'
    },
    {
      img:'assets/img/pera.png',
      titulo:'pera'
    },
    {
      img:'assets/img/pina.png',
      titulo:'piña'
    },
    {
      img:'assets/img/platano.png',
      titulo:'platano'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
