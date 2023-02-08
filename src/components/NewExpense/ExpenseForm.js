import { Button, Form, Input } from "antd";
import { useState } from "react";

// const [enteredTitle, setEnteredTitle] = useState("");

// const titleChangeHandler = (e) => {
//   setEnteredTitle(e.target.value);
// };

// const amountChangeHandler = (e) => {
//   console.log(e.target.value);
// };
const ExpenseForm = (props) => {
  const [form] = Form.useForm();
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
  };

  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
  };
  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setEnteredAmount("");
    setEnteredDate("");
    setEnteredTitle("");
  };

  const onFinish = (values) => {
    form.resetFields();
  };

  return (
    <Form
      onSubmitCapture={submitHandler}
      onFinish={onFinish}
      form={form}
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 14,
      }}
      style={{
        maxWidth: 400,
      }}
      // initialValues={{
      //   remember: true,
      // }}
      autoComplete="off"
    >
      <Form.Item
        label="Title"
        name="title"
        rules={[
          {
            required: true,
            message: "Please input title",
          },
        ]}
      >
        <Input type="text" value={enteredTitle} onChange={titleChangeHandler} />
      </Form.Item>

      <Form.Item
        label="Amount"
        name="amount"
        rules={[
          {
            required: true,
            message: "Please input amount",
          },
        ]}
      >
        <Input
          value={enteredAmount}
          onChange={amountChangeHandler}
          min={0.01}
          type="number"
          step={0.01}
        />
      </Form.Item>

      <Form.Item
        label="Date"
        name="date"
        rules={[
          {
            required: true,
            message: "Please input amount",
          },
        ]}
      >
        <Input
          value={enteredDate}
          type="date"
          onChange={dateChangeHandler}
          min="2021-01-01"
          max="2023-12-31"
        />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button htmlType="submit">Add new expense</Button>
      </Form.Item>
    </Form>
  );
};
export default ExpenseForm;
