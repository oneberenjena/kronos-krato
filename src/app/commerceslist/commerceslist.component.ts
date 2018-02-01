import { CommerceComponent } from './../commerce/commerce.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-commerceslist',
  templateUrl: './commerceslist.component.html',
  styleUrls: ['./commerceslist.component.scss']
})
export class CommerceslistComponent {
  public value:string;
  public commerces:any[];
  public searchList:string[];
  public category:string[];
  public filteringCat:string[];
  public searchForList:boolean;
  public ascending:boolean;
  constructor(){
    this.searchForList = true;
    this.category = ["Licoreria", "Supermercado", "Farmacia", "Centro Comercial", "Tienda de Ropa"];
    this.commerces = [{
    'id': 0,
    'name': "Lujoreria",
    'sector': "Licoreria",
    'logo': '',
    'rating': 3.8,
    'description': 'Una buena licoreria de lujo'
  },
  {
    'id': 1,
    'name': "El Venado",
    'sector': "Supermercado",
    'logo': '',
    'rating': 4.2,
    'description': 'El mejor minimercado de la zona universitaria'
  },
  {
    'id': 2,
    'name': "Farmacias Farmacia",
    'sector': "Farmacia",
    'logo': '',
    'rating': 2.3,
    'description': 'Unica farmacia exclusiva en farmacias'
  },
  {
    'id': 3,
    'name': "Palma Center",
    'sector': "Centro Comercial",
    'logo': '',
    'rating': 3.4,
    'description': 'Grandioso centro comercial si no tienes nada que hacer'
  },
  {
    'id': 4,
    'name': "SAAS",
    'sector': "Farmacia",
    'logo': '',
    'rating': 4.4,
    'description': 'Puedes conseguir de todo, a un precio exagerado'
  },
  {
    'id': 5,
    'name': "Prolicor",
    'sector': "Licoreria",
    'logo': '',
    'rating': 4.5,
    'description': 'De lo mas variado hasta lo mas exotico en bebidas'
  },
  {
    'id': 6,
    'name': "Blue Coast",
    'sector': "Centro Comercial",
    'logo': '',
    'rating': 4.9,
    'description': 'Espacioso desde el estacionamiento hasta sus baños'
  },
  {
    'id': 7,
    'name': "Unicasa",
    'sector': "Supermercado",
    'logo': '',
    'rating': 2.2,
    'description': 'No siempre hay carne'
  },
  {
    'id': 8,
    'name': "Superdry",
    'sector': "Tienda de Ropa",
    'logo': '',
    'rating': 4.8,
    'description': 'Todo es lindo hasta que pagas'
  },
  {
    'id': 9,
    'name': "Mercado",
    'sector': "Supermercado",
    'logo': '',
    'rating': 3.1,
    'description': 'Solo un simple mercado'
  }
];

  this.searchList = ['name', 'description'];
  this.filteringCat = ['sector'];
  }
}