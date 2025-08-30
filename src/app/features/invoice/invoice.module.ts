import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InvoiceListComponent } from './invoice-list/invoice-list.component';

@NgModule({
  declarations: [
    InvoiceListComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    InvoiceListComponent
  ]
})
export class InvoiceModule { } 