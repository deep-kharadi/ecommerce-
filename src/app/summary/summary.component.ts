import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Location } from "@angular/common";
import { CommonModule } from "@angular/common";

import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { CartService } from "../services/cart.service"; // Assuming you have a CartService to get cart items
import { MatToolbarModule } from "@angular/material/toolbar";

@Component({
  selector: "app-summary",
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule
  ],
  templateUrl: "./summary.component.html",
  styleUrl: "./summary.component.scss",
})
export class SummaryComponent {
  purchasedItems: any = [];
  totalPrice: any = 0;

  constructor(
    private cartService: CartService,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit(): void {
    // Get cart items and total price from the service
    this.purchasedItems = this.cartService.getCartItems();
    this.totalPrice = this.cartService.getTotalPrice();
  }
}
