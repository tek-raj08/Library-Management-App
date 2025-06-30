const initialState = { books: [] };
export const bookReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_BOOK":
            return {
                ...state,
                books: [...state.books, action.payload]
            };
        case "REMOVE_BOOK":
            return {
                ...state,
                books: state.books.filter(book => book.isbn !== action.payload)
            };
        default:
            return state;
    }
};
