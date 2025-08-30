import { PaymentStatus } from '../constants';
import { PaymentMethod } from '../constants/payment-method.enum';
import { Invoice } from './invoice.model';

export interface Payment {
  id: string;
  invoiceId: string;
  amount: number;
  paidDate: Date;
  status: PaymentStatus;
  paymentMethod: PaymentMethod;
  createdAt: Date;
  updatedAt: Date;
  invoice?: Invoice;
}

export interface CreatePaymentDto {
  invoiceId: string;
  amount: number;
  paidDate: string;
  paymentMethod: PaymentMethod;
}

export interface UpdatePaymentDto {
  status: PaymentStatus;
} 