import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";
import { ShoppingListComponent } from "./shopping-list.component";
import { ShoppingListEditComponent } from "./shopping-list-edit/shopping-list-edit.component";

@NgModule({
  declarations: [ShoppingListComponent, ShoppingListEditComponent],
  imports: [
    FormsModule,
    RouterModule.forChild([{ path: "", component: ShoppingListComponent }]),
    SharedModule,
  ],
})
export class ShoppingListModule {}
