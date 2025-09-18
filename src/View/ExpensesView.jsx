import React from "react";
import ExpensesForm from "../Expenses/expensesForm";
import ExpensesList from "../Expenses/expensesList";
import TotalExpensePerCategory from "../Expenses/totalPerCategory";
import { useNavigate } from "react-router-dom";

export default function ExpensesView() {
  const navigate = useNavigate();

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
      <TotalExpensePerCategory />
      <ExpensesList />

      <button
        onClick={() => navigate("/submit-expense")}
        style={{
          padding: "5px 10px",
          backgroundColor: "#726b6bff",
          border: "none",
          borderRadius: "5px",
          color: "white",
          cursor: "pointer",
        }}
      >
        Ajouter une nouvelle dépense
      </button>
    </div>
  );
}
