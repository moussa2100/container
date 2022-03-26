import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Sidebar from "./Views/Layout/sidebar";

export const App = () =>{

return (
<Sidebar />
);

}
ReactDOM.render(<App />, document.getElementById("app"));
