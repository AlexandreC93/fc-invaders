import React from 'react'
import ImgBull from '../img/bullets.png'

class Bullet extends React.Component {
    state = {}



    render() {
        return (

            <div id="bullet" >

                <img src={ImgBull} 
                alt="bullet" 
                className="bull-img" 
                style={{

                    gridColumn: this.props.x, gridRow: this.props.y,

                    display: this.props.y >= 9 && "none"

                }} />

            </div>

        );
    }
}

export default Bullet;