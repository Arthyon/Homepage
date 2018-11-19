import React from "react";
import { getVersion } from "../modules/GetVersion";

export class Footer extends React.Component<{}, {}> {
    render() {
        return <div>
            <hr />
            <i>Site is running version: {getVersion()}</i>
            <br />
            <img src="https://travis-ci.com/Arthyon/Homepage.svg?branch=master" />
            <br />
            <a href="https://codeclimate.com/github/Arthyon/Homepage/maintainability"><img src="https://api.codeclimate.com/v1/badges/5d6367ed966e65d8bd43/maintainability" /></a>
            <br />
            <a href="https://codeclimate.com/github/Arthyon/Homepage/test_coverage"><img src="https://api.codeclimate.com/v1/badges/5d6367ed966e65d8bd43/test_coverage" /></a>
        </div>

    }
}