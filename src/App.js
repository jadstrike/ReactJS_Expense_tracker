import ExpenseItem from "./components/ExpenseItem";
import "./components/ExpenseItem.css";
import { Typography } from "antd";
import NewExpense from "./components/NewExpense/NewExpense";
import ExpenseFilter from "./components/Expenses/ExpenseFilter";
import { useState } from "react";
import { Empty } from "antd";
import ExpenseChart from "./components/Expenses/ExpenseChart";
import dayjs from "dayjs";
const { Title } = Typography;
const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2020, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2020, 5, 12),
  },
];
const App = () => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (date) => {
    const selectedYear = date.$y;
    console.log(selectedYear);
    setFilteredYear(selectedYear.toString());
  };

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    console.log(expense);
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  const filteredExpenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expenseContent = <Empty description="No Expenses" />;
  if (filteredExpenses.length > 0) {
    expenseContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }
  // const { Title } = Typography;
  return (
    <div>
      <Typography className="header">
        <Title>View your expenses</Title>
        <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        ></ExpenseFilter>
      </Typography>
      <div className="chart-wrapper">
        <ExpenseChart expenses={filteredExpenses} />
      </div>
      <div className="expense-wrapper">{expenseContent}</div>
    </div>
  );
};
export default App;
