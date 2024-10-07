import React, { Component } from'react';
import axios from 'axios';
import Link from 'next/link';

/* class Index extends Component {
    constructor(props) {
        // this will run on both client and server side
        super(props);
        console.log("FETCHIN DATA IN COMPONENT CONSTRUCTOR");
    };

    static async getInitialProps() {
        // this will only run once: first on server side then on client side
        console.log("FETCHIN DATA IN GET INITIAL PROPS");
        // https://jsonplaceholder.typicode.com/posts
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
        const { data } = res;
        return { posts: data };
    }

    
    componentDidMount() {
        // this only happens on the client side
        // there is no mounting in the server side
        console.log("FETCHIN DATA IN COMPONENT DID MOUNT");
    }
    

    render() {
        const { posts } = props;
        console.log("***************INDEX*******************")
        // the link makes that this runs on the client side, if we click on about
        // the back button also runs on the cient side
        return (
            <div>
                <h1>Hello World</h1>
                <p>This is a paragraph</p>
            </div>
        )
    }

}; */

const Index = ({ posts }) => {
    // posts are props that come from the getInitialProps
    // as='' to customize the URL, it works for client side but not server side
    return (
        <div>
            <h1>Index</h1>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <Link href={`/post?id=${post.id}`} as={`/p/${post.id}`}>
                            {post.title}
                        </Link>
                    </li>
                    
                ))}
            </ul>
        </div>
    )
};

Index.getInitialProps = async () => {
    // axios: runs on the client side and server side
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    const { data } = res;
    return { posts: data };
}

export default Index;