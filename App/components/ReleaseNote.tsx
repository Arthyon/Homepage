import React from "react";
import BlockContent from "@sanity/block-content-to-react";
const sanityClient = require('@sanity/client');
const client = sanityClient({
    projectId: "dgj4r2lw",
    dataset: "production",
    useCdn: true
});

export interface ReleaseNoteState { notes: Array<any> };

export class ReleaseNote extends React.Component<{}, ReleaseNoteState> {
    constructor(props) {
        super(props);
        this.state = { notes: [] };
    }
    async componentDidMount() {
        const notes = await client.fetch("*[_type == $type]{'mainImage': mainImage.asset->url, ...}[0...2]",
            { type: "releaseNote" })
        this.setState({ notes: notes });
    }
    render() {
        return this.state.notes.map(n => this.renderPost(n));
    }

    private renderPost(notes) {
        return <div key={notes._id}>
            <h1>Version {notes.version}</h1>
            {notes.mainImage &&
                <img src={notes.mainImage + "?h=200"} />
            }
            <BlockContent blocks={notes.body} />
        </div>
    }

}