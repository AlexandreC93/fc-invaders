import React from 'react'
import ImgBull from '../img/bullet.png'

class Bullet extends React.Component {

    render() {

        return (

            <div id="bullet" style={{

                gridColumn: this.props.x, gridRow: this.props.y,

                display: this.props.isHidden ? "none" : "inherit"

            }}>
                <img src={ImgBull}
                    alt="bullet"
                    className="bull-img"
                     />

            <div/>
            
            {/* <img className="bullet" src={ImgBullet} alt="" /> */}
            </div>

        );
    }
}

export default Bullet;