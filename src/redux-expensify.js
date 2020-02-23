import { createStore, combineReducers } from 'redux'
import uuid from 'uuid'

const addExpense = ({
  description = '',
  note = '',
  amount = 0,
  createdAt = 0
} = {}) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
})

const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
})

const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
})

const expensesReducerDefaultState = []

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expense]
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => id !== action.id)
    case 'EDIT_EXPENSE':
      return state.map(expense =>
        expense.id === action.id ? { ...expense, ...action.updates } : expense
      )
    default:
      return state
  }
}

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    default:
      return state
  }
}

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
)

store.subscribe(() => console.log(store.getState()))

const expenseOne = store.dispatch(
  addExpense({ description: 'Rent', amount: 100 })
)

const expenseTwo = store.dispatch(
  addExpense({ description: 'Coffee', amount: 300 })
)

store.dispatch(removeExpense({ id: expenseOne.expense.id }))
store.dispatch(
  editExpense(expenseTwo.expense.id, {
    amount: 500,
    note: 'Coffee with my friends'
  })
)

const demoState = {
  expenses: [
    {
      id: 'wqwsqwmmwq',
      description: 'January rent',
      note: 'This was he final payment for that adress',
      amount: 54500,
      createdAt: 0
    }
  ],
  filters: {
    text: 'rent',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  }
}

const user = {
  name: 'Monaaa',
  age: 24
}
console.log({ ...user, location: 'Brazil', age: 30 })
