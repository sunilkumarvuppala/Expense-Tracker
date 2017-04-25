import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ExpenseService } from '../../services/expense.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Popup } from 'ng2-opd-popup';

@Component({
  selector: 'app-expense-report',
  templateUrl: './expense-report.component.html',
  styleUrls: ['./expense-report.component.css']
})
export class ExpenseReportComponent implements OnInit {

  
  @ViewChild('popup1') popup1: Popup;

  expenses: any;
  user: any;
  username: String;
  expenseName: String;
  editExpenseObj = {
    _id: '',
    username: '',
    expenseName: '',
    amount: '',
    __v: ''
  };
  amount: String;
  constructor(private expenseService: ExpenseService,
    private router: Router,
    private flashMessage: FlashMessagesService) { }

    

  ngOnInit() {
    this.user = localStorage.getItem('user');
    this.username = JSON.parse(this.user).username;
    this.expenseService.getAllExpenses(this.username).subscribe(expenses => {
      this.expenseService.expenses = expenses;
    });
  }

  deleteExpense(expense) {
      let index = this.expenseService.expenses.indexOf(expense);
      this.expenseService.expenses.splice(index, 1);
      this.expenseService.deleteExpenseService(expense._id).subscribe(data => {
        console.log(data);
      });
  }

  showPop(expense) {
    this.popup1.options = {
        header: "Edit Expense",
        color: "steelblue", // red, blue.... 
        widthProsentage: 40, // The with of the popou measured by browser width 
        animationDuration: 1, // in seconds, 0 = no animation 
        showButtons: true, // You can hide this in case you want to use custom buttons 
        confirmBtnContent: "OK", // The text on your confirm button
        cancleBtnContent: "Cancel", // the text on your cancel button 
        confirmBtnClass: "btn btn-default", // your class for styling the confirm button  
        cancleBtnClass: "btn btn-default", // you class for styling the cancel button 
        animation: "fadeInDown" // 'fadeInLeft', 'fadeInRight', 'fadeInUp', 'bounceIn','bounceInDown' 
    };
    
    this.popup1.show(this.popup1.options);
    this.editExpenseObj= expense;
    // console.log(this.editExpenseObj);
  }

  editExpense() {
    // console.log(this.editExpenseObj);
    this.expenseService.editExpenseService(this.editExpenseObj).subscribe(data => {
      console.log(data);
    }); 
    this.popup1.hide();  
  }

  YourConfirmEvent(){
    alert('You cliked confirm');
  }

  YourCancelEvent(){
    alert('You cliked cancel');
  }

}
