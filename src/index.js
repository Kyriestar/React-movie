import React from "react";
import ReactDOM from "react-dom";

import {App} from './app';
import 'antd/dist/antd.css';
import './app.css';
const Index = () => {
	return <App/> ;
};

ReactDOM.render(<App/>, document.getElementById("index"));