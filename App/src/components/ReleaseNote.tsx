import React from "react";
import BlockContent from "@sanity/block-content-to-react";
import { client } from "../modules/CmsClient";
import { RouteComponentProps } from 'react-router-dom';
import { CodeBlock } from './CodeBlock';

export interface ReleaseNoteState { notes: any };
const serializers = {
    types: {
        code: props => (
            <CodeBlock language={props.node.language}
                code={props.node.code} />
        )
    }
}
export class ReleaseNote extends React.Component<RouteComponentProps<{ slug }>, ReleaseNoteState> {
    constructor(props) {
        super(props);
        this.state = { notes: undefined };
    }
    async componentDidMount() {
        const slug = this.props.match.params.slug;
        const notes = await client.fetch("*[_type == $type && slug.current == $slug]{'mainImage': mainImage.asset->url, ...}[0]",
            { type: "releaseNote", slug: slug })
        this.setState({ notes: notes });
    }
    render() {
        if (this.state.notes === undefined)
            return null;

        return <div key={this.state.notes._id}>
            <h1>Version {this.state.notes.version}</h1>
            <p>{this.state.notes.releaseDate}</p>
            {this.state.notes.mainImage &&
                <a href={this.state.notes.mainImage}><img src={this.state.notes.mainImage + "?h=200"} /></a>
            }
            <BlockContent blocks={this.state.notes.body} serializers={serializers} />
        </div>
    }


}