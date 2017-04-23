import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { ExpenseService } from '../../services/expense.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css']
})
export class AddExpenseComponent implements OnInit {

  expenseName: String;
  amount: Number;
  user: any;

  constructor(private authService: AuthService, 
              private flashMessage: FlashMessagesService,
              private expenseService: ExpenseService,
              private router: Router) { }

  ngOnInit() {
    this.authService.getProfile().subscribe(profile => {
      this.user = profile.user;
    }),
    err => {
      console.log(err);
      return false;
    }
  }

  onExpenseSubmit() {
    console.log("inside expense submit");
    console.log("user: " + this.user.username);
    const expense = {
      username: this.user.username,
      expenseName: this.expenseName,
      amount: this.amount,
      date: new Date()     
    }
    if(expense.expenseName!=null && expense.amount!=null){
       this.expenseService.expenses.push(expense);
    };
   
    //add expense
    this.expenseService.addExpense(expense).subscribe(data =>{
            if(data.success) {
        this.flashMessage.show('Expense had been added', {cssClass: 'alert-success', timeout: 5000});
        //this.router.navigate(['']);
        
      } else {
        this.flashMessage.show('Something went wrong', {cssClass: 'alert-danger', timeout: 5000});
        //this.router.navigate(['']);
      }
    });

    this.expenseName=null;
    this.amount=null;
  }

}
