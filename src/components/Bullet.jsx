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

<<<<<<< HEAD
            <div id="bullet"
           >
            
            {/* <img className="bullet" src={ImgBullet} alt="" /> */}
=======
>>>>>>> bd0c4da72580079c219991ae5fdb3c8d0e378307
            </div>

        );
    }
}

export default Bullet;