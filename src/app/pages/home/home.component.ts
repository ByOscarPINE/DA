import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Product {
  name: string;
  price: number;
  stock: number;
  description: string;
  image: string;
  category: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  name: string = 'Oscar';

  products: Product[] = [
    {
      category: 'Bebidas',
      description: 'Bebida con lactobacilos',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkmwi5_92iilpH4DGKbCgXgUmM64iMXJ-GxQ&s',
      name: 'Yakult',
      price: 12,
      stock: 50
    },
    {
      category: 'Botanas',
      description:'Cacahuates japoneses',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSug_opAvILHVO-w7k7523k74z1fTaDkVsrxA&s',
      name: 'Karate',
      price: 10,
      stock: 100 
    },
    {
      category: 'Botanas',
      description: 'Papas fritas',
      image: 'https://www.tasteboutique.com/cdn/shop/products/Sabritas_con_sal_170_gr_366x.jpg?v=1586040425',
      name: 'Sabritas',
      price: 15,
      stock: 100
    },
    {
      category: 'Botanas',
      description: 'Galletas de chocolate',
      image: 'https://media.justo.mx/products/19884_Principe-Marinela-de-Chocolate-252g_2.jpg',
      name: 'Marinela',
      price: 10,
      stock: 100
    },
    {
      category: 'Bebidas',
      description: 'Refresco de cola',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxpWoR_-3rsruP6DyqWFhKmb5IhueSlIiWgA&s',
      name: 'Coca Cola',
      price: 15,
      stock: 100
    }
  ]

}
