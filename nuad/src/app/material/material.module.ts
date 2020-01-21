import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatListModule,
  MatSidenavModule,
  MatDialogModule,
  MatFormFieldModule,
  MatSelectModule,
  MatInputModule,
  MatGridListModule,
  MatCardModule,
  MatTabsModule
} from "@angular/material";


const material = [
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatListModule,
  MatSidenavModule,
  MatDialogModule,
  MatFormFieldModule,
  MatSelectModule,
  MatInputModule,
  MatGridListModule,
  MatCardModule,
  MatTabsModule
];


@NgModule({

  imports: [material],
  exports: [material]
})
export class MaterialModule { }
