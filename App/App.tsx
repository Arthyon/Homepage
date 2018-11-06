
import { Main } from "./Main";
import React from "react";
import { Footer } from "./components/Footer";

export class App extends React.Component<{}, {}> {
    render() {
        return <div>
            <Main />
            <Footer />
        </div>

    }
}