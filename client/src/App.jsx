import './App.css';
import { Route, Routes } from 'react-router-dom';
import React from 'react';
import Registration from './Components/Registration';
import Login from './Components/Login';
import AddExpense from './Components/AddExpense';
import NavBar from './Components/NavBar';
import ExpensesList from './Components/ExpensesList';
import DataCard from './Components/DataCard';
// import Main from './Components/Main';
// import Test from './Components/test';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        {/* <Route path="/" element={<Main />} /> */}
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/add" element={<AddExpense />} />
        <Route path="/list/:category" element={<ExpensesList />} />
        <Route path="/datacard" element={<DataCard />} />
        {/* <Route path="/test" element={<Test />} /> */}
      </Routes>
    </>
  );
}

export default App;
