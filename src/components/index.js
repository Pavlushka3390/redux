import { connect } from "react-redux";

import ServiceList from "./ServiceList";
import ServiceForm from "./ServiceForm";
import ServiceFilter from "./ServiceFilter";
import * as selectors from "../store";
import * as actions from "../store/servicesSlice";

export const WithStoreServiceForm = connect(
  (state) => ({
    item: selectors.selectedServiceSelector(state)
  }),
  (dispatch) => ({
    onSubmit: data => dispatch(actions.save(data)),
    onCancel: () => dispatch(actions.select(null))
  })
)(ServiceForm);

export const WithStoreServiceList = connect(
  (state) => ({
    items: selectors.filteredServicesSelector(state)
  }),
  (dispatch) => ({
    onEdit: serviceId => dispatch(actions.select(serviceId)),
    onRemove: serviceId => dispatch(actions.remove(serviceId))
  })
)(ServiceList);

export { ServiceFilter };