import { Product } from '../models/product.model';
import { Injectable } from '@angular/core';
import productsData from '../../assets/products.json';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'assets/products.json';  // Path to your JSON file

  constructor() { }

  getProducts(): Product[] {
    return productsData
  }
}
