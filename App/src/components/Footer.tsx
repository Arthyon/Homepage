import React from "react";
import { getVersion } from "../modules/GetVersion";

export class Footer extends React.Component<{}, {}> {
    render() {
        return <div><i>Site is running version: {getVersion()}</i></div>

    }
}