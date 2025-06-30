import { createStore, applyMiddleware } from "redux"
import loggerMiddleware from "./loggerMiddleware"
import { bookReducer } from "./bookReducer"
const store = createStore(bookReducer, applyMiddleware(loggerMiddleware))
export default store