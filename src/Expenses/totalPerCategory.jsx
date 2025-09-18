import React from "react";
import { useSelector } from "react-redux";
import "../Style/TotalExpensePerCategory.css";

export default function totalPerCategory() {
  const expenses = useSelector((state) => state.expenses);
  const categories = ["Alimentation", "Transport", "Loyer", "Loisirs", "Autre"];
  const totals = categories.map((cat) => {
    const total = expenses
      .filter((exp) => exp.category === cat)
      .reduce((sum, exp) => sum + exp.amount, 0);
    return { category: cat, total };
  });
  return (
    <div className="total-expense-per-category">
      {totals.map((cat) => (
        <div key={cat.category} className="total-expense-category-content">
          <h3 className="category">{cat.category}</h3>
          <p className="total">{cat.total.toFixed(2)}€</p>
        </div>
      ))}
    </div>
  );
}
