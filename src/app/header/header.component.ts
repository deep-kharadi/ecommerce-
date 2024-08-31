import { Component, OnInit } from "@angular/core";
import { CartService } from "../services/cart.service";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: "app-header",
  standalone: true,
  imports: [MatToolbarModule,MatButtonModule],
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.scss",
})
export class HeaderComponent {
  totalPrice: number = 0;
  constructor(private cartService: CartService) {}
  ngOnInit(): void {
    this.cartService.cart$.subscribe(() => {
      this.totalPrice = this.cartService.getTotalPrice();
    });
  }
}
