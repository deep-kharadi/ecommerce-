import {  Component, HostListener, OnInit, Inject, PLATFORM_ID ,AfterViewInit } from "@angular/core";
import { ProductService } from "../services/product-service.service";
import { CartService } from "../services/cart.service";

import { Product } from "../models/product.model";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatCardModule } from "@angular/material/card";
import {MatButtonModule} from '@angular/material/button';

import { isPlatformBrowser ,CommonModule} from '@angular/common';

@Component({
  selector: "app-product-list",
  standalone: true,
  imports: [
    CommonModule,
    MatGridListModule,
    MatToolbarModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule
  ],
  templateUrl: "./product-list.component.html",
  styleUrl: "./product-list.component.scss",
})
export class ProductListComponent implements OnInit ,AfterViewInit  {
  products: Product[] = [];
  gridCols: number = 1;

  constructor(@Inject(PLATFORM_ID) private platformId: Object , private productService: ProductService,private cartService: CartService) {
    this.updateGridCols();
  }
  @HostListener("window:resize", ["$event"])
  onResize(event?: Event) {
    this.updateGridCols();
  }
  updateGridCols(): void {
    if (isPlatformBrowser(this.platformId)) {
      const width = window.innerWidth;
      if (width > 1200) {
        this.gridCols = 4;  // 4 columns on large screens
      } else if (width > 800) {
        this.gridCols = 3;  // 3 columns on medium screens
      } else if (width > 600) {
        this.gridCols = 2;  // 2 columns on small screens
      } else {
        this.gridCols = 1;  // 1 column on extra small screens
      }
    }
  }
  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }
  ngAfterViewInit(): void {
    this.updateGridCols();
  }
  addToCart(product: Product): void {
    this.cartService.addToCart({ ...product, quantity: 1 });
  }
}
