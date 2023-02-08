import React, { useContext, useState } from "react";
import { TransactionContext } from "./transContext";
const Child = () => {
  let { transactions, addTransaction } = useContext(TransactionContext);
  const [data, setData] = useState({
    desc: "",
    amount: "",
  });
  // console.log({transactions})

  // handle input
  const handleInput = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // on submit
  const handleAddition = (e) => {
    e.preventDefault();
    if (Number(data.amount) === 0) {
      alert("nothing is free pleas enter correct amount");
      return false;
    }
    addTransaction({
      amount: parseInt(data.amount),
      desc: data.desc,
    });
    console.log(typeof data.amount);
    setData({
      desc: "",
      amount: "",
    });
  };

  // income calculate
  const getIncome = () => {
    let income = 0;
    for (var i = 0; i < transactions.length; i++) {
      if (transactions[i].amount > 0) income = income + transactions[i].amount;
    }
    return income;
  };

  // expense calculate

  const getExpense = () => {
    let expense = 0;
    for (var i = 0; i < transactions.length; i++) {
      if (transactions[i].amount < 0)
        expense = expense + transactions[i].amount;
    }
    return expense;
  };

  return (
    <div className="container">
      <h1 className="text-center">Expense Tracker</h1>
      <h3>
        Your Balance <br /> {getIncome() + getExpense()}
      </h3>
      <div className="expense-container">
        <h3>
          INCOME <br /> {getIncome()}
        </h3>
        <h3>
          EXPENSE <br />
          {getExpense()}
        </h3>
      </div>
      <h3> History </h3>
      <hr />
      <h3> Add new transaction</h3>
      <hr />
      <ul className="transaction-list">
        {transactions.map((transObj, ind) => {
          return (
            <li>
              <span>{transObj.desc}</span>
              <span>{transObj.amount}</span>
            </li>
          );
        })}
      </ul>
      <form className="transaction-form">
        <label>
          Enter Description <br />
          <input
            type="text"
            required
            onChange={(e) => {
              handleInput(e);
            }}
            name="desc"
            value={data.desc}
          />
        </label>
        <br />
        <label>
          Enter Amount <br />
          <input
            type="number"
            required
            onChange={(e) => {
              handleInput(e);
            }}
            name="amount"
            value={data.amount}
          />
        </label>
        <br />
        <input
          type="submit"
          value="Add Transaction"
          onClick={(e) => {
            handleAddition(e);
          }}
        />
      </form>
    </div>
  );
};

export default Child;
