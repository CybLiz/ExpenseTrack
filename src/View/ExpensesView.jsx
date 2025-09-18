import React from "react";
import ExpensesForm from "../Expenses/expensesForm";
import ExpensesList from "../Expenses/expensesList";
import TotalExpensePerCategory from "../Expenses/totalPerCategory"

export default function ExpensesView() {
  return (
    <div
      className="expenses"
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px",
        padding: "20px",
      }}
    >
      <TotalExpensePerCategory/>
      <ExpensesList />
    </div>
  );
}
