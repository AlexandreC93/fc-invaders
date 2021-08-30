import React from 'react'
import ImgShip from '../img/ship.png'

const maxY = 1000
const minY = 0
const maxX = 1000
const minX = 0



class Ship extends React.Component {
    



   
    render() { 
        return ( 

            <div id="ship">
            <img className="ship" src={ImgShip} onKeyPress={this.props.key} alt="" />
            </div>

         );
    }
}
 
export default Ship;