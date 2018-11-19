
import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { ReleaseNote } from "./components/ReleaseNote";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

export class Main extends React.Component<{}, {}> {
    render() {
        return (
            <div>
                <Header />
                <main>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/release-notes/:slug" component={ReleaseNote} />
                    </Switch>
                </main>
                <Footer></Footer>
            </div>);
    }

}