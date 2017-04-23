const express = require('express');
const router = express.Router();
const Expense = require('../models/expenseModel');
const jwt = require('jsonwebtoken');

//Register

router.post('/newExpense', (req, res, next) => {
    let expense = new Expense({
        username: req.body.username,
        expenseName : req.body.expenseName,
        amount : req.body.amount,
    });
    Expense.addExpense(expense, (err, expense) => {
        if(err) {
            res.json({success: false, msg : "Failed to Add Expense"})
        } else {
            res.json({success: true, msg : "Expense Added! Chillax \m/"});
        }
    });
});

router.get('/', (req, res, next) => {
    Expense.getAllExpenses((err, data) => {
        if(err) {
            res.json({success: false, msg : "Failed to Add Expense"})
        } else {
            res.json(data);
        }
    })
});

module.exports = router;