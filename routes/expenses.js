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

router.get('/:username', (req, res, next) => {
    Expense.getAllExpenses(req.params.username, (err, data) => {
        if(err) {
            res.json({success: false, msg : "Failed to Add Expense"})
        } else {
            res.json(data);
        }
    })
});

router.delete('/:id', (req, res, next) => {
    Expense.deleteExpenses(req.params.id, (err, selectedExpense) => {
        if(err) {
            res.json({success: false, msg : "Failed to Add Expense"})
        } else {
            res.json({success: true, msg : "Expense Added! Chillax \m/"});
        }
    })
});

router.put('/:_id', (req, res) => {
    var id = req.params._id
    var expense = req.body;
    Expense.editExpense(id, expense, {}, (err, expense) => {
        if(err) {
            throw err;
        } else {
            res.json(expense);
        }
    });
});

module.exports = router;