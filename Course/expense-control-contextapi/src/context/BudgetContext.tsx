import { useReducer, createContext, useMemo } from "react"
import { budgetReducer, initialState, type BudgetState } from "../reducers/budget-reducer"
import type { BudgetActions } from "../reducers/budget-reducer"
import type { ActionDispatch, ReactNode } from "react"

type BudgetContextProps = {
    state: BudgetState
    dispatch: ActionDispatch<[action: BudgetActions]>
    totalExpenses: number
    remainingBudget: number

}

type BudgetProviderProps = {
    children: ReactNode
}

// The action of having the global state
// export const BudgetContext = createContext<BudgetContextProps>({} as BudgetContextProps) or...
export const BudgetContext = createContext<BudgetContextProps>(null!)

// Provider (Where does the data come from?): To access the information
// "children" refers to the children of a component (it's a special prop and exists in react)
export const BudgetProvider = ({children}: BudgetProviderProps) => {

    const [state, dispatch] = useReducer(budgetReducer, initialState)

    const totalExpenses = useMemo( () => state.expenses.reduce((total, expense) => expense.amount + total, 0), [state.expenses])
    const remainingBudget = state.budget - totalExpenses

    return (
        <BudgetContext.Provider
            // Connected context and provider (An object is always required)
            value={{
                state,
                dispatch,
                totalExpenses,
                remainingBudget
            }}
        >
            {children}
        </BudgetContext.Provider>
    )
}
