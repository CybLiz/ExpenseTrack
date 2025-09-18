import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addExpense } from "../store";
import "../Style/expensesForm.css";

const ExpenseForm = () => {
  const [label, setLabel] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Alimentation");
  const [date, setDate] = useState("");
  const [idCounter, setIdCounter] = useState(0);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newId = idCounter + 1;
    const newExpense = {
      id: newId,
      label,
      amount: parseFloat(amount),
      category,
      date,
    };

    dispatch(addExpense(newExpense));
    setIdCounter(newId);
    setLabel("");
    setAmount("");
    setCategory("Alimentation");
    setDate("");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection:"column",
        alignItems: "center",
        height: "100vh",
        padding: "20px",
      }}
    >

        <h1>Ajouter une dépense</h1>
      <form onSubmit={handleSubmit} className="expense-form">
        <label htmlFor="label">Libellé</label>
        <input
          id="label"
          type="text"
          placeholder="Ex: Courses"
          value={label}
          onChange={(e) => setLabel(e.target.value)}
          required
        />

        <label htmlFor="amount">Montant</label>
        <input
          id="amount"
          type="number"
          step="0.01"
          placeholder="Ex: 12.50"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />

        <label htmlFor="category">Catégorie</label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Alimentation">Alimentation</option>
          <option value="Transport">Transport</option>
          <option value="Loyer">Loyer</option>
          <option value="Loisirs">Loisirs</option>
          <option value="Autre">Autre</option>
        </select>

        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />

        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
};

export default ExpenseForm;
