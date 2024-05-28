import React, { Component } from 'react';
import ColorBox from './ColorBox';
import './Palette.css';

class Palette extends Component {
    render() {
        const oneColor = this.props.colors[1].colors;
        console.log(oneColor)
        const colorBoxes = oneColor.map(color => (
            <ColorBox background={color.color} name={color.name}/>
        ));
        return (
            <div className='Palette'>
                {/*Navbar */}
                <div className='Palette-colors'>
                {/*Colors */}
                    {colorBoxes}
                </div>
                {/*Footer */}
            </div>
        )
    }
}

export default Palette;