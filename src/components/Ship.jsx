import React from 'react'
import ImgShip from '../img/ship.png'

class Ship extends React.Component {
    state = {  }
    render() { 
        return ( 

            <div id="ship">
            <img className="ship" src={ImgShip} alt="" />
            </div>

         );
    }
}
 
export default Ship;