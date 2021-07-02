import { createAction } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3001";

const getAllContactsRequest = createAction("phonebook/getAllContactsRequest");
const getAllContactsSuccess = createAction("phonebook/getAllContactsSuccess");
const getAllContactsFailure = createAction("phonebook/getAllContactsFailure");



const addNewContactRequested = createAction("phonebook/addNewContactRequested");
const addNewContactSuccess = createAction("phonebook/addNewContactSuccess");
const addNewContactFailure = createAction("phonebook/addNewContactFailure");


const deleteContactRequested  = createAction("phonebook/deleteContactRequested");
const deleteContactSuccess = createAction("phonebook/deleteContactSuccess");
const deleteContactFailure  = createAction("phonebook/deleteContactFailure ");

const onChangeFilter = createAction("phonebook/changeFilter");


export {
  getAllContactsRequest,
  getAllContactsSuccess,
  getAllContactsFailure,
  addNewContactRequested,
  addNewContactSuccess,
  addNewContactFailure,
  deleteContactRequested,
  deleteContactSuccess,
  deleteContactFailure,
  onChangeFilter,
};
