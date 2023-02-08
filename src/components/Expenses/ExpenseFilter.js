import { DatePicker, Space } from "antd";
import moment from "moment";
import dayjs from "dayjs";

const ExpenseFilter = (props) => {
  const dropdownChangeHandler = (date) => {
    // date = date.$y.toLocaleDateString();
    console.log(date);
    // console.log(date,)
    // console.log(moment(date).format("YYYY"));
    // const selectedYear = moment(date).format("YYYY");

    props.onChangeFilter(date);
  };
  return (
    <Space direction="vertical">
      <DatePicker
        value={dayjs(props.selected)}
        onChange={dropdownChangeHandler}
        picker="year"
      />
    </Space>
  );
};

export default ExpenseFilter;
