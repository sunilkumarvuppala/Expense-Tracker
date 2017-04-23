var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

//user schema
const expenseSchema = mongoose.Schema({
    username: {
        type: String
    },
    expenseName : {
        type: String,
        required: true
    },
    amount : {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Expense = module.exports = mongoose.model('Expense', expenseSchema);

module.exports.getExpenseById = (id, callback) => {
    Expense.findById(id, callback);
};

module.exports.addExpense = (newExpense, callback) => {
    Expense.create(newExpense, callback);
};

module.exports.getAllExpenses = (callback) => {
    Expense.find({}, callback);
};