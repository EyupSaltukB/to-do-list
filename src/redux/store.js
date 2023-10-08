/*
! Store Oluşturma ;
- Redux kütüphanesinden { createStore } metodu import edilir.
- store içinde tutulacak veriler kategorize edilir ve her biri için reducer oluşturulur.
- birden fazla reducer varsa oluşturulan reducerlar
combineReducers metoduyla birleştirilir.
- store'a reducerlar tanıtılır.
- oluşturulan store projeye tanıtılır.
*/

import todoReducer from "./reducers/TodoReducer";
import { createStore } from "redux";

// store'a reducerları tanıtma
const store = createStore(todoReducer);

// projeye tanıtmak için export edilir.
export default store;