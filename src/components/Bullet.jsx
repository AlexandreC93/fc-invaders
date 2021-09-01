import React from 'react'
import ImgBullet from '../img/bullets.png'

class Bullet extends React.Component {
    state = {  }



    render() { 
        return ( 

            <div id="bullet"
            onKeyDown={(e)=>this.onKeyDown(e)}
            tabIndex="0">
                {}
            {/* <img className="bullet" src={ImgBullet} alt="" /> */}
            </div>

         );
    }
}
 
export default Bullet;