//base dependancies
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";

//added dependancies
import { createStore, applyMiddleware  } from "redux";
import { Provider } from "react-redux";
import thunk from 'redux-thunk';
//added reducer
import { AppReducer } from './reducer/Index';
import logger from 'redux-logger';


const applicationStore = createStore(AppReducer, applyMiddleware(thunk, logger));


ReactDOM.render(
    <Provider store = {applicationStore}>
       <App /> 
    </Provider>,

document.getElementById("root"));