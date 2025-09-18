import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import HomeView from "./View/HomeView";
import ExpensesView from "./View/ExpensesView";
import ExpensesFormView from "./View/ExpensesFormView";
import NavBarComponent from "./component/NavBarComponent";
function App() {
  return (
    <div>
      <NavBarComponent />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/submit-expense" element={<ExpensesFormView />} />
        <Route path="/expenses" element={<ExpensesView />} />
        {/* <Route path='/*' element={<NotFound />}/> */}
      </Routes>
    </div>
  );
}

export default App;
