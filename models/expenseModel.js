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

module.exports.getAllExpenses = (username, callback) => {
    Expense.find({username: username}, callback);
};

module.exports.deleteExpenses = (id, callback) => {
    Expense.remove({_id: id}, callback);
};

module.exports.editExpense = (id, newExpense, options, callback) => {
	var query = { _id : id};
	var update = {
        username: newExpense.username,
		expenseName: newExpense.expenseName,
        amount: newExpense.amount,
	}
    Expense.findOneAndUpdate(query, update, options, callback);
}