import {createStore, combineReducers} from "redux";
import redusers from "./redusers";



export default () => createStore(combineReducers(redusers));