import React from "react";

export class Footer extends React.Component<{}, {}> {
    render() {
        return <div><i>Site is running version: {process.env.VERSION}</i></div>

    }
}