import React from "react";
import Child from "./Components/Child";
import './App.css'
import { TransactionProvider } from "./Components/transContext";
function App() {
  return (
    <TransactionProvider>
      <Child/>
    </TransactionProvider>
  );
}

export default App;
