import { createContext, useReducer } from "react";
import { addDays } from "date-fns";

const today = new Date();
const tomorrow = addDays(today, 2)

const INITIAL_STATE = {
  city: "santiago",
  dates: [
    {
      startDate: today,
      endDate: tomorrow,
      key: "selection",
    },
  ],
  options: {
    adults: 1,
    children: 0,
    room: 1,
  },
};

export const SearchContext = createContext(INITIAL_STATE);

const SearchReducer = (state, action) => {
    switch (action.type) {
      case "NEW_SEARCH":
        return action.payload;
      case "RESET_SEARCH":
        return INITIAL_STATE;
      default:
        return state;
    }
}

export const SearchContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(SearchReducer, INITIAL_STATE);

    return (
        <SearchContext.Provider value={{
            city: state.city,
            dates: state.dates,
            options: state.options,
            dispatch
        } } >

            {children}
        </SearchContext.Provider>
    )
}