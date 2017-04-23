import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { LocalStorageService } from 'angular-2-local-storage';
import { tokenNotExpired } from 'angular2-jwt';
import 'rxjs/add/operator/map';

@Injectable()
export class ExpenseService {

  port = "http://localhost:3000";
  expenses: any;

  constructor(private http: Http,
              private localStorage: LocalStorageService) { }

  addExpense(expense) {
    console.log('addExpense func');
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post( this.port + '/expenses/newExpense', expense, {headers})
      .map(res => res.json());
  }


  getAllExpenses(){
    return this.http.get(this.port + '/expenses/')
            .map(res => res.json());
  }

}
