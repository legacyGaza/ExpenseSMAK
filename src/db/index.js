// Require mongoose
const mongoose = require('mongoose');
// Connecting mongoose
mongoose
  .connect(
    'mongodb+srv://MhmdHourani:0597552045@bookfinder.actzs.mongodb.net/Expenses?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log(' DB connected');
  })
  .catch((err) => {
    console.log('Error while connecting to DB', err);
  });

// Create expensesSchema
let expensesSchema = mongoose.Schema({
  expensesTypes: {
    type: String,
    required: [true, 'Please add some expensesTypes'],
  },
  amount: {
    type: Number,
    required: [true, 'Please add a positive or negative number'],
  },
  createdAt: { type: Date, default: Date.now },
  description: {
    type: String,
    required: [true, 'Please add some description'],
  },
  first_name: { type: String },
  last_name: { type: String },
  email: { type: String, required: true },
});

////////////////////////////////////////////////////////

let UserSchema = mongoose.Schema(
  {
    first_name: { type: String },
    last_name: { type: String },
    email: { type: String },
    password: { type: String },
    expenses: [
      {
        date:  Date ,
        type: String,
        item: String,
        amount: Number,
        description: String,
      },
    ],
  },
  { typeKey: '$type' }
);

let expensesModel = mongoose.model('expenses', expensesSchema);
let users = mongoose.model('users', UserSchema);

// Export expensesModel
module.exports.expensesModel = expensesModel;
module.exports.users = users;
