import React from 'react'
import ImgBullet from '../img/bullets.png'

class Bullet extends React.Component {
    state = {  }


    componentDidMount(){
        document.addEventListener('keydown', this.OnKeyDown.bind(this))
    }

onKeyDown(e){

    
console.log("c");
}



    render() { 
        return ( 

            <div id="bullet"
            onKeyDown={(e)=>this.onKeyDown(e)}
            tabIndex="0">
                {}
            <img className="bullet" src={ImgBullet} alt="" />
            </div>

         );
    }
}
 
export default Bullet;