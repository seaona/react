import React, { Component } from'react';

class Index extends Component {
    constructor(props) {
        // this will run on both client and server side
        super(props);
        console.log("FETCHIN DATA IN COMPONENT CONSTRUCTOR");
    };

    static async getInitialProps() {
        // this will only run once: first on server side then on client side
        console.log("FETCHIN DATA IN GET INITIAL PROPS");
        return {test: 'test'}
    }

    /*
    componentDidMount() {
        // this only happens on the client side
        // there is no mounting in the server side
        console.log("FETCHIN DATA IN COMPONENT DID MOUNT");
    }
    */

    render() {
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

};

export default Index;