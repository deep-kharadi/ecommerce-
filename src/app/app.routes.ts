import { Routes } from "@angular/router";
import { ProductListComponent } from "./product-list/product-list.component";
import { CartComponent } from "./cart/cart.component";
import { SummaryComponent } from './summary/summary.component';

export const routes: Routes = [
  { path: "", component: ProductListComponent },
  { path: "cart", component: CartComponent },
  { path: "summary", component: SummaryComponent },
  { path: "**", redirectTo: "" }, // Wildcard route for a 404 page or redirect
];
