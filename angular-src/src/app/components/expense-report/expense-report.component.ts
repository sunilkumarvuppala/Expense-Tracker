import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ExpenseService } from '../../services/expense.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-expense-report',
  templateUrl: './expense-report.component.html',
  styleUrls: ['./expense-report.component.css']
})
export class ExpenseReportComponent implements OnInit {

  expenses: any;

  constructor(private expenseService: ExpenseService,
    private router: Router,
    private flashMessage: FlashMessagesService) { }

  ngOnInit() {
    this.expenseService.getAllExpenses().subscribe(expenses => {
      this.expenseService.expenses = expenses;
    });
  }

}
