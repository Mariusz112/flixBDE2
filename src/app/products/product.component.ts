import { Component } from '@angular/core';

interface Product {
  imageUrl: string;
  name: string;
  link: string;
  description?: string;
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  products: Product[] = [
    {
      imageUrl: 'assets/test.jpg',
      name: 'series1',
      link: 'https://google.com'
    },
    {
      imageUrl: 'assets/series2.jpg',
      name: 'series2',
      link: 'https://google.com'
    },
    {
      imageUrl: 'assets/series3.jpg',
      name: 'series3',
      link: 'https://google.com',
      description: 'New!'
    },
    {
      imageUrl: 'assets/series4.jpg',
      name: 'series4',
      link: 'https://google.com'
    }
  ];
}