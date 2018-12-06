import React from "react";
import Lowlight from 'react-lowlight';
import javascript from 'highlight.js/lib/languages/javascript';
import text from 'highlight.js/lib/languages/plaintext';
Lowlight.registerLanguage('js', javascript);
Lowlight.registerLanguage('text', text);

export class CodeBlock extends React.Component<{ language: string, code: string }, {}> {
    render() {
        return <Lowlight language={this.props.language}
            value={this.props.code} />
    }

}