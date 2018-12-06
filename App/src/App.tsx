
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
                    <link
                        rel="stylesheet"
                        href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.2.0/styles/default.min.css"
                    />
                </head>

                <body>
                    <div id="react-app" dangerouslySetInnerHTML={{ __html: this.props.content }}></div>

                    <script src="/scripts/bundle.js"></script>
                </body>

            </html>
        );

    }
}