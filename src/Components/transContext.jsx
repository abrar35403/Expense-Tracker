import React,{ createContext, useReducer } from "react";
import TransactionReducer from "./transReducer";

let initialTransactions = [
  {
    desc: "cash",
    amount: 500,
  },
  {
    desc: "Food",
    amount: 300,
  },
  {
    desc: "cash",
    amount: 240,
  },
];

export const TransactionContext = createContext(initialTransactions);

// reducer

export const TransactionProvider = ({children}) => {
  let [state, dispatch] = useReducer(TransactionReducer, initialTransactions);
  function addTransaction(transObj) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: {
        amount: transObj.amount,
        desc: transObj.desc,
      },
    });
  }
  return(
    <TransactionContext.Provider value={{
        transactions: state ,
        addTransaction
    }}>
    {children}
    </TransactionContext.Provider>
  )
};
