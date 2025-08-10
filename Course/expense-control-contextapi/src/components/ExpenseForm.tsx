import { useState, type ChangeEvent, type FormEvent } from "react";
import type { DraftExpense, Value } from "../types";
import { categories } from "../data/categories";

import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';

import ErrorMessage from "./ErrorMessage";

export default function ExpenseForm() {

  const [expense, setExpense] = useState<DraftExpense>({
    amount: 0,
    expenseName: "",
    category: "",
    date: new Date()
  })
  const [error, setError] = useState("")

  const handleChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
    const {name, value} = e.target
    const isAmountField = ["amount"].includes(name)
    setExpense({
      ...expense,
      // [name]: isAmountField ? +value : value
      [name]: isAmountField ? Number(value) : value
    })
  }

  const handleChangeDate = (value: Value) => {
    setExpense({
      ...expense,
      date: value
    })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (Object.values(expense).includes("")) {
      setError("All fields are mandatory")
      return
    }
    console.log("All good")
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <legend 
        className="uppercase text-center text-2xl font-black border-b-4 border-blue-500 py-2"
      >New Expense
      </legend>

      {error && <ErrorMessage>{error}</ErrorMessage>}
      
      <div className="flex flex-col gap-2">
        <label
          htmlFor="expenseName"
          className="text-xl"
        >Expense Name:</label>
        <input  
          type="text"
          id="expenseName"
          placeholder="Add the Expense Name"
          className="bg-slate-100 p-2"
          name="expenseName"
          onChange={handleChange}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="amount"
          className="text-xl"
        >Amount:</label>
        <input  
          type="number"
          id="amount"
          placeholder="Add the Expense Amount: (e.g) 300"
          className="bg-slate-100 p-2"
          name="amount"
          onChange={handleChange}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="category"
          className="text-xl"
        >Category:</label>
        <select
          id="category"
          className="bg-slate-100 p-2"
          name="category"
          value={expense.category}
          onChange={handleChange}
        >
          <option value="">-- Select --</option>
          {categories.map( category => (
            <option key={category.id} value={category.id}>{category.name}</option>
          ) )}
        </select> 
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="amount"
          className="text-xl"
        >Expense Date:</label>
        <DatePicker
          className="bg-slate-100 p-2 border-0"
          value={expense.date}
          onChange={handleChangeDate}
        />
      </div>

      <input
        type="submit"
        className="bg-blue-600 cursor-pointer w-full p-2 text-white uppercase font-bold rounded-lg"
        value={"Add Expense"}
      />
    </form>
  )
}
