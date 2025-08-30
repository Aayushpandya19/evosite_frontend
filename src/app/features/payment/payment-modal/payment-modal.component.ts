import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PaymentService } from '../../../core/services/payment.service';
import { CreatePaymentDto } from '../../../core/models/payment.model';
import { Invoice } from '../../../core/models/invoice.model';
import { PaymentMethod } from '../../../core/constants/payment-method.enum';

@Component({
  selector: 'app-payment-modal',
  templateUrl: './payment-modal.component.html',
  styleUrls: ['./payment-modal.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class PaymentModalComponent implements OnInit {
  showModal = false;
  invoice: Invoice | null = null;
  paymentMethods = Object.values(PaymentMethod);
  
  payment: CreatePaymentDto = {
    invoiceId: '',
    amount: 0,
    paidDate: new Date().toISOString().split('T')[0],
    paymentMethod: PaymentMethod.BANK_TRANSFER
  };

  constructor(private paymentService: PaymentService) {}

  ngOnInit(): void {}

  open(invoice: Invoice) {
    this.invoice = invoice;
    this.payment.invoiceId = invoice.id;
    this.payment.amount = invoice.amount;
    this.showModal = true;
  }

  close() {
    this.showModal = false;
    this.invoice = null;
    this.resetForm();
  }

  resetForm() {
    this.payment = {
      invoiceId: '',
      amount: 0,
      paidDate: new Date().toISOString().split('T')[0],
      paymentMethod: PaymentMethod.BANK_TRANSFER
    };
  }

  onSubmit() {
    if (this.invoice) {
      this.paymentService.createPayment(this.payment).subscribe({
        next: (response) => {
          console.log('Payment created successfully', response);
          this.close();
          // You might want to emit an event to refresh the invoice list
        },
        error: (error) => {
          console.error('Error creating payment', error);
        }
      });
    }
  }
} 