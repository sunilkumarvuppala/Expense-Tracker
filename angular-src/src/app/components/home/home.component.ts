import { Component, OnInit } from '@angular/core';
import { AddExpenseComponent } from '../add-expense/add-expense.component';
import { ExpenseReportComponent } from '../expense-report/expense-report.component';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private flashMessage: FlashMessagesService) { }

  ngOnInit() {
  }

}
