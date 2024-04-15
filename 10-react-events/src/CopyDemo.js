import React, { Component } from 'react';

class CopyDemo extends Component {
    handleCopy() {
        alert('STOP STEALING FROM ME')
    }

    render() {
        return (
            <div>
                <h3>Try Copying Some of This Text: </h3>
                <section
                    style={{width: '300px', display: 'inline-block'}}
                    onCopy={this.handleCopy}    
                >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis feugiat, tellus sed scelerisque mattis, diam augue ultricies magna, non ornare lacus velit eu ligula. Maecenas vel tortor et eros egestas malesuada. Vestibulum pulvinar ipsum vitae lacinia finibus. Morbi quis dolor rutrum, scelerisque magna vel, vehicula enim. Nunc sollicitudin, eros id mattis imperdiet, est velit euismod massa, a faucibus arcu tortor vel massa. Etiam quis metus eget dui pellentesque venenatis vitae at dolor. Donec dapibus sollicitudin sollicitudin. Sed sed pretium nisi. In posuere in felis eu condimentum. Donec ac tincidunt sem. Suspendisse semper ut massa nec feugiat. 
                </section>
            </div>
        )
    }
}

export default CopyDemo;