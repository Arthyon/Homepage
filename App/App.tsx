
import React from "react";

export interface AppProps {
    content: string;
}

export class App extends React.Component<AppProps, {}> {
    render() {
        return (
            <html>
                <head>
                    <meta charSet="utf-8" />
                    <title>Hello!</title>
                </head>

                <body>
                    <div id="react-app" dangerouslySetInnerHTML={{ __html: this.props.content }}></div>

                    <script src="scripts/bundle.js"></script>
                </body>

            </html>
        );

    }
}