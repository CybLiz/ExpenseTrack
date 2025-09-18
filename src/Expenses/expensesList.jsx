import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeExpense } from "../store";
import "../Style/expensesList.css";

export default function expensesList() {
  const expenses = useSelector((state) => state.expenses);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(removeExpense(id));
  };

  return (
    <div  className="expense-list">
      {expenses.map((expense) => (
        <div key={expense.id} className="expense-list-content">
          <div className="info" >
            <h3 className="label">{expense.label}</h3>
            <div className="detail">
              <p className="category">{expense.category}</p>
              <p className="date">{expense.date}</p>
            </div>
          </div>
          <div className="btn-wrapper"> 
            <h3 className="total">{expense.amount.toFixed(2)}€</h3>
            <button
              className="deleteBtn"
              onClick={() => handleDelete(expense.id)}
            >
              Supprimer
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
