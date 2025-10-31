import { Component, OnInit } from '@angular/core';
import { OrderService } from '../services/order';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-order-list',
  standalone:true,
  imports:[DatePipe],
  templateUrl: './order-list.html',
  styleUrls: ['./order-list.scss']
})
export class OrderListComponent implements OnInit {
  orders: any[] = [];
  loading = true;

  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.orderService.getOrders().subscribe({
      next: (res) => {
        this.orders = res;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }
}
