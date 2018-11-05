import React from "react";
import ReactDOM from "react-dom";

import { ReleaseNote } from "./components/ReleaseNote";

ReactDOM.render(
    renderSite(),
    document.getElementById("react-app")
);

function renderSite() {
    return <div>
        <ReleaseNote />
        <div><i>Site is running version: {process.env.VERSION}</i></div>
    </div>
}