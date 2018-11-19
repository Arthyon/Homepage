import React from "react";
import { client } from "../modules/CmsClient";
import { Link } from "react-router-dom";

export interface HomeState { notes: Array<any> };
export class Home extends React.Component<{}, HomeState> {
    constructor(props) {
        super(props);
        this.state = { notes: [] };
    }
    async componentDidMount() {
        const notes = await client.fetch("*[_type == $type][0...5]",
            { type: "releaseNote" })
        this.setState({ notes: notes });
    }
    render() {
        return this.state.notes.map(n => this.renderPost(n));
    }

    private renderPost(notes) {
        return <div key={notes._id}>
            <h1><Link to={`/release-notes/${notes.slug.current}`}>Version {notes.version}</Link></h1>
            <p>{notes.releaseDate}</p>
        </div>
    }
}