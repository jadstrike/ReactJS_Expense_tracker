import "./ExpenseItem.css";
import Card from "antd/es/card/Card";
import { Button } from "antd";
import { useState } from "react";

const ExpenseItem = (props) => {
  let expenseDate = props.date;
  let expenseTitle = props.title;
  let expenseAmount = props.amount;
  let month = expenseDate.toLocaleString("en-US", { month: "long" });
  let day = expenseDate.toLocaleString("en-US", { day: "2-digit" });
  let year = expenseDate.getFullYear();

  const [title, settitle] = useState(expenseTitle);

  // const clickHandler = () => {
  //   settitle("Updated");
  // };

  return (
    // <`div className="expense-item">
    //   <div>March 28th 2021</div>
    //   <div className="expense-item__description"></div>
    //   <h2>Car Insurance</h2>
    //   <div className="expense-item__price">$29.89</div>
    // </div>`
    <Card
      className="expense-card"
      title={
        <div className="date">
          <div>{month}</div>
          <div>{day}</div>
          <div>{year}</div>
        </div>
      }
      bordered={true}
      style={{
        width: 300,
      }}
    >
      <h4>{title}</h4>
      <p>${expenseAmount}</p>
      {/* <Button onClick={clickHandler}>change title</Button> */}
    </Card>
  );
};

export default ExpenseItem;
