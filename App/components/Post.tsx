import React from "react";
import BlockContent from "@sanity/block-content-to-react";
const sanityClient = require('@sanity/client');
const client = sanityClient({
    projectId: "dgj4r2lw",
    dataset: "production",
    useCdn: true
});

export interface PostState { post: any | null };

export class Post extends React.Component<{}, PostState> {
    constructor(props) {
        super(props);
        this.state = { post: null };
    }
    async componentDidMount() {
        const posts = await client.fetch("*[_type == $type][0...1]",
            { type: "post" })
        if (posts.length > 0) {
            this.setState({ post: posts[0] });
        }
    }
    render() {
        if (this.state.post === null)
            return null;
        return this.renderPost(this.state.post);
    }

    private renderPost(post) {
        return <div>
            <h1>{post.title}</h1>
            <BlockContent blocks={post.body} />
        </div>
    }

}



// client.getdocument("christian-hochlin").then(author => {
//     console.log(author);
// });