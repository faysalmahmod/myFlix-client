import moviesReducer from "../features/movieSlice";
import filtersReducer from "../features/filtersSlice";
import {combineReducers} from "redux";

export const rootReducer = combineReducers({
        movies: moviesReducer,
        visibilityFilter: filtersReducer,
});

export default rootReducer;