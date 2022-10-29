import { createStore, combineReducers } from "redux";
import { createSelector } from "reselect";
import servicesReducer from "./servicesSlice";
import filtersReducer from "./filtersSlice";

const rootReducer = combineReducers({
  services: servicesReducer,
  filters: filtersReducer
});

export default createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const servicesSelector = state => state.services.list;

export const filterByNameSelector = state => state.filters.name;

export const selectedServiceSelector = createSelector(
  servicesSelector,
  state => state.services.selectedId,
  (services, selectedId) => selectedId && services.find(item => selectedId === item.id)
);

export const filteredServicesSelector = createSelector(
  servicesSelector,
  filterByNameSelector,
  (services, filter) => filter ? services.filter(item => item.name.includes(filter)) : services
);